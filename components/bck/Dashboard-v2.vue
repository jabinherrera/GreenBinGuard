<template>
  <div>
    <h1>GreenBinGuard</h1>
    <p v-for="item in mqttData" :key="item.topic">{{ item.topic }}: {{ item.value }}</p>
  </div>
</template>

<script>
import mqtt from 'mqtt'

export default {
  data() {
    return {
      client: null,
      THINGSBOARD_HOST: 'iot.ceisufro.cl',
      THINGSBOARD_PORT: 1883,
      TOPIC: 'v1/devices/me/rpc/request/+',
      CLIENT_ID: 'ncu3vty0clyrft7d1a7g',
      USERNAME: 'Reciclaje',
      PASSWORD: 'eh8arffisad8fsilqt83',
      //ACCESS_TOKEN: '',
      mqttData: [],
      subscribeSuccess: false,
      connection: {
        host: this.THINGSBOARD_HOST,
        port: this.THINGSBOARD_PORT,
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 4000,
        clientId: this.CLIENT_ID,
        username: this.USERNAME,
        password: this.PASSWORD,
      },
      subscription: {
        topic: this.TOPIC,
        qos: 0
      }
    }
  },
  mounted() {
    this.connectMQTT()
  },
  methods: {
    connectMQTT() {
      const { ...options } = this.connection
      const connectUrl = 'mqtt://${this.THINGSBOARD_HOST}:${this.THINGSBOARD_PORT}'

      try {
        this.client = mqtt.connect(connectUrl, options)
      } catch (error) {
        console.error('Error al conectarse al servidor', error)
      }

      this.client.on('connect', () => {
        console.log('MQTT conectado')
        this.subscribeToRPCRequests()
      })

      this.client.on('message', (topic, message) => {
        this.onMessage(topic, message)
      })

      this.client.on('error', error => {
        console.error('Error en MQTT', error)
      })
    },
    subscribeToRPCRequests() {
      const { qos } = this.subscription

      this.client.subscribe(this.TOPIC, { qos }, (error, res) => {
        if (error) {
          console.error('Subscripcion fallida', error)
          return
        } else {
          this.subscribeSuccess = true
          console.log('Suscrito exitosamente', res)
        }
      })
    },
    onMessage(topic, message) {
      console.log('Mensaje recibido:', topic, message.toString())
      try {
        const data = JSON.parse(message.toString())
        this.mqttData.push({ topic, value: data })
      } catch (error) {
        console.error('Error al intentar parsear el mensaje de MQTT:', error)
        this.mqttData.push({ topic, value: message.toString() })
      }      
    }
  }
}
</script>
