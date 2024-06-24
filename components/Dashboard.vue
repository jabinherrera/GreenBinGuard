<template>
  <div>
    <h1>GreenBinGuard</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
  async asyncData({ $swagger }) {
    try {
      const respone = await $swagger.api.dashboard-controller.getDashboardByIdUsingGET
      return { dashboard: respone.body }
    } catch (error) {
      console.error('Error intenetando obtener informacion', error)
    }
  }
}
</script>
