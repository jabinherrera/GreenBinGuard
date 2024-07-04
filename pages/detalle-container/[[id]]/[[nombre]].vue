<template>
  <Header />
  <div class="contenedor-detalle-page">
    
    <div class="contenedor-info">
      <h2>{{ $route.params.nombre }} - {{ $route.params.id }}</h2>
      <nuxt-link to="/dispositivos" class="back-button">Mis contenedores</nuxt-link>
    </div>
    <div class="dashboard">
      <div class="realtime-chart">
        <h3>Monitoreo de uso en tiempo real</h3>
        <RealTimeChart />
      </div>
      <div class="dashboard-info">
        <ContainerUsage />
        <div class="info-box">
          <h4>Llenado del contenedor</h4>
          <ContainerFillLevel />
        </div>
        <button class="empty-container-button">Vaciar contenedor</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'
import RealTimeChart from '~/components/RealTimeChart.vue'
import ContainerFillLevel from '~/components/ContainerFillLevel.vue'
import ContainerUsage from '~/components/ContainerUsage.vue'

const route = useRoute()

</script>

<style scoped>
.contenedor-detalle-page {
  padding: 20px;
}

.contenedor-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: black;
}

.back-button {
  background-color: white;
  color: #7ec041;
  padding: 5px 10px;
  border: 2px solid #7ec041;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.back-button:hover {
  background-color: #6abf37;
  color: white;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.realtime-chart {
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.dashboard-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-box h4 {
  margin-bottom: 10px;
}

.info-box .info-value {
  font-size: 24px;
  color: #7ec041;
}

.empty-container-button {
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.empty-container-button:hover {
  background-color: #d32f2f;
}
</style>
