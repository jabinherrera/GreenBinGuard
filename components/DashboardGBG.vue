<template>
  <div>
    <h1>Dashboard de Contenedores de Reciclaje</h1>
    <h2>Datos de Telemetría</h2>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      token: null,
      refreshTok: null,
      //magnetico_tiempo: null,
      magnetico_activo: null,
      //nivel_lleno_tiempo: null, 
      nivel_lleno: null,
      pendiente: false,
      data: null,
      error: null,
      pending: false,
      refresh: null,
      urlLog: 'http://iot.ceisufro.cl:8080/api/auth/login',
      urlRefresh: 'http://iot.ceisufro.cl:8080/api/auth/token',
      urlTelemetry: 'http://iot.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/3a661420-21aa-11ef-9ae0-45d10902f7b5/values/timeseries'
    };
  },
  methods: {
    async fetchToken() {
      try {
        this.pendiente = true
        const data = await $fetch(this.urlLog, {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Connection: 'keep-alive'
            },
            body: '{"username":"p.navarrete06@ufromail.cl","password":"Ingiot7"}'
        })
        //console.log(data)
        const { token, refreshToken } = data
        //console.log(token)
        //console.log(refreshToken)
        this.token = token
        this.refreshTok = refreshToken
        
      } catch (err) {
        console.error('error:' + err)
      } finally {
        this.pendiente = false
        this.data = false
      }
    },
    async refreshToken() {
      try {

        console.log(this.token)
        console.log(this.refreshTok)

        this.pendiente = true
        const data = await $fetch(this.urlRefresh, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
          },
          body: '{"refreshToken":' + this.refreshTok + '}'
        })
        console.log(data)
        const { token, refreshToken } = data
        console.log(token)
        console.log(refreshToken)
        this.token = token
        this.refreshTok = refreshToken
      } catch (err) {
        console.error('error:' + err)
      } finally {
        this.pendiente = false
        this.data = false
      }
    },
    async fetchTelemetry() {
      try {
        this.pendiente = true
        const data = await $fetch(this.urlTelemetry, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
          }
        })
        console.log(data)
        const { magnetico, nivel_lleno } = data

        console.log(magnetico)
        console.log(nivel_lleno)

        const [{ value: valor_magnetico }] = magnetico
        const [{ value: valor_llenado }] = nivel_lleno

        console.log(valor_magnetico)
        console.log(valor_llenado)
        this.magnetico_activo = valor_magnetico
        this.nivel_lleno = valor_llenado

      } catch (err) {
        console.error('error:' + err)
      } finally {
        this.pendiente = false
        this.data = false
      }
    },
    async sequence() {
      await this.fetchToken()
      await this.fetchTelemetry()
      
    }
  },
  mounted() {
    this.sequence()
    setTimeout(() => {
        this.refreshToken()
    }, 3000)
  }

};
</script>

