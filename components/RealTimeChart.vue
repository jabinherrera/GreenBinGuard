<template>
    <div>
      <line-chart :chart-data="datacollection" :options="chartOptions"></line-chart>
    </div>
  </template>
  
  <script setup>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import { ref, onMounted } from 'vue'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
  
  const datacollection = ref({
    labels: Array.from({ length: 10 }, (_, i) => new Date().toLocaleTimeString()),
    datasets: [
      {
        label: 'Puerta',
        backgroundColor: '#42A5F5',
        data: Array.from({ length: 10 }, () => Math.round(Math.random()))
      }
    ]
  })
  
  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: false
  })
  
  // Simulación de datos en tiempo real
  onMounted(() => {
    setInterval(() => {
      const newData = Math.round(Math.random())
      const newLabel = new Date().toLocaleTimeString()
      datacollection.value.labels.push(newLabel)
      datacollection.value.labels.shift()
      datacollection.value.datasets[0].data.push(newData)
      datacollection.value.datasets[0].data.shift()
    }, 2000)
  })
  </script>
  
  <style scoped>
  .line-chart-container {
    height: 300px;
  }
  </style>
  