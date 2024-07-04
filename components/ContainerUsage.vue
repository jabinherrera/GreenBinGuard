<template>
    <div class="usage-container">
      <div class="icon-container">
        <img src="~/assets/recycle-icon.png" alt="Recycle Icon" class="icon">
      </div>
      <div class="usage-info">
        <h4>Usos contenedor</h4>
        <p class="usage-value">{{ count }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useDataFetching } from '@/composables/useDataFetching'
  
  // Simulación de datos de uso
  const usos = 0
  
  const { estadoMagnetico } = useDataFetching()

  const numbers = ref([])

  const count = computed(() => {
    let count = 0;
    let prevNum = estadoMagnetico.value;
    for (let i = 0; i < numbers.value.length; i++) {
      if (prevNum === 1 && numbers.value[i] === 0) {
        count++;
      }
      prevNum = numbers.value[i];
    }
    return count;
  })
  </script>
  
  <style scoped>
  .usage-container {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .icon-container {
    margin-right: 10px;
  }
  
  .icon {
    width: 40px;
    height: 40px;
  }
  
  .usage-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .usage-info h4 {
    margin: 0;
    font-size: 14px;
    color: #555;
  }
  
  .usage-value {
    font-size: 24px;
    color: #7ec041;
  }
  </style>
  