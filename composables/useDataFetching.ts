import { ref, onMounted, onUnmounted } from 'vue'
import { useCookie } from '#app'
import { onNuxtReady } from '#app'

export const useDataFetching = () => {
  const tokenCookie = useCookie('token')
  const refreshTokenCookie = useCookie('refreshToken')
  const data = ref<any>(null)
  const nivelLlenado = ref<any>(null)
  const estadoMagnetico = ref<any>(null)
  const pending = ref(false)
  const error = ref<any>(null)
  const token = ref(tokenCookie.value)
  const refreshTok = ref(refreshTokenCookie.value)
  const urlLogin = 'http://iot.ceisufro.cl:8080/api/auth/login'
  const urlRefresh = 'http://iot.ceisufro.cl:8080/api/auth/token'
  const urlTelemetry = 'http://iot.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/3a661420-21aa-11ef-9ae0-45d10902f7b5/values/timeseries'
  let interval: ReturnType<typeof setInterval> | null = null
  let tokenInterval: ReturnType<typeof setInterval> | null = null

  async function fetchData() {
    pending.value = true
    try {
      const response = await $fetch<any>(urlTelemetry, {
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      })
      data.value = response
      const { magnetico, nivel_lleno } = response
      const [{ value: valor_magnetico }] = magnetico
      const [{ value: valor_llenado }] = nivel_lleno
      estadoMagnetico.value = valor_magnetico
      nivelLlenado.value = valor_llenado
    } catch (err) {
      error.value = err
    } finally {
      pending.value = false
    }
  }

  async function refreshToken() {
    pending.value = true
    try {
      const response = await $fetch<any>(urlRefresh, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.value}`
        },
        body: '{"refreshToken":' + refreshTok.value + '}'
      })

      const { token: tok, refreshToken: refTok } = response

      token.value = tok
      tokenCookie.value = tok
      refreshTok.value = refTok
      refreshTokenCookie.value = refTok
    } catch (err) {
      error.value = err
    } finally {
      pending.value = false
    }
  }

  async function fetchToken() {
    pending.value = true
    try {
      pending.value = true
      const response = await $fetch<any>(urlLogin, {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Connection: 'keep-alive'
          },
          body: '{"username":"p.navarrete06@ufromail.cl","password":"Ingiot7"}'
      })

      const { token: tok, refreshToken: refTok } = response

      token.value = tok
      tokenCookie.value = tok
      refreshTok.value = refTok
      refreshTokenCookie.value = refTok
    } catch (err) {
      console.error('error:' + err)
    } finally {
      pending.value = false
    }
  }

  onNuxtReady(() => {
    interval = setInterval(() => {
      fetchData()
    }, 60000)
    tokenInterval = setInterval(() => {
      refreshToken()
    }, 8400000)
  })

  onMounted(async () => {
    await fetchToken()
    fetchData()
  })

  onUnmounted(() => {
    if (interval){
      clearInterval(interval)
    }
  })

  return {
    nivelLlenado,
    estadoMagnetico,
    pending,
    error,
    token,
    refreshTok
  }

}
