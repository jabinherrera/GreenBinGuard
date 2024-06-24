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
      CLIENT_ID: 'ncu3vty0clyrft7d1a7g',
      USERNAME: 'Reciclaje',
      PASSWORD: 'eh8arffisad8fsilqt83',
      //ACCESS_TOKEN: '',
      mqttData: []
    }
  },
  mounted() {
    this.connectMQTT()
  },
  methods: {
    connectMQTT() {

      this.client = mqtt.connect('mqtt://${this.THINGSBOARD_HOST}', {
        clientId: this.CLIENT_ID,
        username: this.USERNAME,
        password: this.PASSWORD
      })

      this.client.on('connect', () => {
        console.log('MQTT conectado')
        this.subscribeToRPCRequests()
      })

      this.client.on('message', (topic, message) => {
        this.onMessage(topic, message)
      })

      this.client.on('error', (err) => {
        console.error('Error en MQTT', err)
      })
    },
    subscribeToRPCRequests() {
      this.client.subscribe('v1/devices/me/rpc/request/+')
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
    },
    //Genericos
    publishAttributes() {
      const atributes = {
        stringKey: 'value1',
        booleanKey: true,
        doubleKey: 42.9,
        longKey: 73,
        jsonKey: {
          someNumber: 42,
          someArray: [1, 2, 3],
          someNestedObject: { key: 'value' }
        }
      }

      this.client.publish('v1/devices/me/attributes',JSON.stringify(attributes))
    },
    publishTelemetry() {
      const telemetry = {
        temperature: 42,
        humidity: 80
      }

      this.client.publish('v1/devices/me/telemetry', JSON.stringify(telemetry))
    },
    subscribeAttributeUpdates() {
      this.client.subscribe('v1/device/me/attributes')
      this.client.on('message', (topic, message) => {
        const attributes = JSON.parse(message.toString())
        console.log('Received attrbute updates:', attributes)
      })
    }
  }
}
</script>
