<template>
    <div>
      <doughnut-chart :chart-data="datacollection" :options="chartOptions"></doughnut-chart>
    </div>
  </template>
  
  <script setup>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import { ref, onMounted } from 'vue'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  const datacollection = ref({
    labels: ['Lleno', 'Vacío'],
    datasets: [
      {
        label: 'Nivel de llenado',
        backgroundColor: ['#7ec041', '#eeeeee'],
        data: [0, 100]
      }
    ]
  })
  
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })
  
  // Simulación de datos de llenado
  onMounted(() => {
    setInterval(() => {
      const fillLevel = Math.round(Math.random() * 100)
      datacollection.value.datasets[0].data = [fillLevel, 100 - fillLevel]
    }, 5000)
  })
  </script>
  
  <style scoped>
  .doughnut-chart-container {
    height: 150px;
  }
  </style>
  