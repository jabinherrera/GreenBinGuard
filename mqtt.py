import time
import RPi.GPIO as GPIO
import json

import paho.mqtt.client as mqtt

THINGSBOARD_HOST = 'iot.ceisufro.cl'
CLIENT_ID = 'ncu3vty0clyrft7d1a7g'
USERNAME = 'Reciclaje'
PASSWORD = 'eh8arffisad8fsilqt83'

INTERVAL = 1

GPIO.setmode(GPIO.BOARD)
pin_sensor_magnetico = 16
pin_trigger = 15
pin_echo = 13

GPIO.setup(pin_sensor_magnetico, GPIO.IN)
GPIO.setup(pin_trigger, GPIO.OUT)
GPIO.setup(pin_echo, GPIO.IN)

def medir_distancia():
    # Enviar pulso Trigger
    GPIO.output(pin_trigger, True)
    time.sleep(0.00001)
    GPIO.output(pin_trigger, False)
    
    # Tiempo de inicio
    start_time = time.time()
    stop_time = time.time()
    
    # Guardar tiempo de inicio
    while GPIO.input(pin_echo) == 0:
        start_time = time.time()
    
    # Guardar tiempo de llegada
    while GPIO.input(pin_echo) == 1:
        stop_time = time.time()
    
    # Calcular diferencia de tiempo
    elapsed_time = stop_time - start_time
    # Multiplicar por la velocidad del sonido (34300 cm/s) y dividir por 2
    distancia = (elapsed_time * 34300) / 2
    return distancia

def calcular_lleno(distancia, altura_max):
    if distancia > altura_max:
        return 0
    elif distancia <= 0:
        return 100
    else:
        return ((altura_max - distancia) / altura_max) * 100

def on_connect(client, userdata, flags, rc):
    print("Connected to ThingsBoard with result code " + str(rc))

def on_message(client, userdata, msg):
    global nivel_lleno_actual
    payload = json.loads(msg.payload)
    if 'reset' in payload and payload['reset'] == True:
        nivel_lleno_actual = 0
        print("Nivel de llenado restablecido a 0 por comando remoto")

client = mqtt.Client(CLIENT_ID)
client.username_pw_set(USERNAME, PASSWORD)
client.on_connect = on_connect
client.on_message = on_message
client.connect(THINGSBOARD_HOST, 1883, 60)
client.subscribe('v1/devices/me/rpc/request/+')
client.loop_start()

estado_anterior = GPIO.input(pin_sensor_magnetico)  # Inicializa con el estado actual del sensor
altura_max_contenedor = 100  # Altura máxima del contenedor en cm
nivel_lleno_actual = 0  # Nivel inicial de llenado
ultimo_nivel_enviado = 0  # Último nivel enviado

try:
    while True:
        estado_sensor = GPIO.input(pin_sensor_magnetico)
        estado_actual = 1 if estado_sensor == 0 else 0
        
        # Verificar si el estado ha cambiado
        if estado_actual != estado_anterior:
            data = {'magnetico': estado_actual}
            client.publish('v1/devices/me/telemetry', json.dumps(data))
            print("Datos enviados a ThingsBoard:", data)
            estado_anterior = estado_actual  # Actualizar el estado anterior

        # Medir la distancia y calcular el nivel de llenado
        distancia = medir_distancia()
        porcentaje_lleno = calcular_lleno(distancia, altura_max_contenedor)

        # Actualizar el nivel de llenado solo si el nuevo porcentaje es mayor que el anterior enviado
        if porcentaje_lleno > nivel_lleno_actual:
            nivel_lleno_actual = porcentaje_lleno
            # Verificar si el nuevo nivel es mayor que el último nivel enviado
            if nivel_lleno_actual > ultimo_nivel_enviado:
                ultimo_nivel_enviado = nivel_lleno_actual
                data = {'nivel_lleno': nivel_lleno_actual}
                client.publish('v1/devices/me/telemetry', json.dumps(data))
                print("Nivel de llenado enviado a ThingsBoard:", data)

        time.sleep(INTERVAL)

except KeyboardInterrupt:
    GPIO.cleanup()
    client.loop_stop()
    client.disconnect()