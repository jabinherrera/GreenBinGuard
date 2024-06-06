import time
import RPi.GPIO as GPIO
import json

import paho.mqtt.client as mqtt

THINGSBOARD_HOST = 'iot.ceisufro.cl'
CLIENT_ID = 'ncu3vty0clyrft7d1a7g'
USERNAME = 'Magnetico'
PASSWORD = 'eh8arffisad8fsilqt83'

INTERVAL = 1

GPIO.setmode(GPIO.BOARD)
pin_sensor_magnetico = 16
GPIO.setup(pin_sensor_magnetico, GPIO.IN)

def on_connect(client, userdata, flags, rc):
    print("Connected to ThingsBoard with result code " + str(rc))

client = mqtt.Client(CLIENT_ID)
client.username_pw_set(USERNAME, PASSWORD)
client.on_connect = on_connect
client.connect(THINGSBOARD_HOST, 1883, 60)
client.loop_start()

estado_anterior = GPIO.input(pin_sensor_magnetico)  # Inicializa con el estado actual del sensor

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

        time.sleep(INTERVAL)

except KeyboardInterrupt:
    GPIO.cleanup()
    client.loop_stop()
    client.disconnect()