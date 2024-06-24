<template>
  <div>
    <h1>Dashboard de Contenedores de Reciclaje</h1>
    <div v-if="telemetryData">
      <h2>Datos de Telemetría</h2>
      <div v-if="(device) in telemetryData" >
        <h3>Dispositivo: {{ device }}</h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      telemetryData: null
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get('/v1/a6oh4oh9qcp2q8flk3b4/attributes/updates');
      this.telemetryData = response.data;
    } catch (error) {
      console.error('Error fetching telemetry data:', error);
    }
  }
};
</script>

