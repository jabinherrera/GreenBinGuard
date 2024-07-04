<template>
    <div class="table-container">
      <h2>Mis contenedores</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ubicacion</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contenedor in contenedores" :key="contenedor.id" @click="goToDetail(contenedor)">
            <td>{{ contenedor.id }}</td>
            <td>{{ contenedor.nombre }}</td>
            <td>{{ contenedor.ubicacion }}</td>
            <td :class="contenedor.estado">{{ contenedor.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  
  const router = useRouter()
  
  const contenedores = ref([
    { id: 418927, nombre: 'Contenedor Carton', ubicacion: 'Uruguay #1840', estado: 'Lleno' },
    { id: 271237, nombre: 'Contenedor Vidrio', ubicacion: 'Uruguay #1840', estado: 'Disponible' },
    { id: 232346, nombre: 'Contenedor Papel', ubicacion: 'Uruguay #1840', estado: 'Disponible' },
    { id: 580834, nombre: 'Contenedor Tetra', ubicacion: 'Uruguay #1840', estado: 'Disponible' },
    { id: 523485, nombre: 'Contenedor Papel', ubicacion: 'Montevideo #0850', estado: 'Lleno' },
    { id: 624328, nombre: 'Contenedor Plastico', ubicacion: 'Montevideo #0850', estado: 'Lleno' },
    { id: 723845, nombre: 'Contenedor Carton', ubicacion: 'Montevideo #0850', estado: 'Disponible' },
  ])
  
  const goToDetail = (contenedor) => {
    router.push(`/detalle-container/${contenedor.id}/${contenedor.nombre}`)
  }
  </script>
  
  <style scoped>
  .table-container {
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f4f4f4;
  }
  .Lleno {
    background-color: #f8d7da;
    color: #721c24;
  }
  .Disponible {
    background-color: #d4edda;
    color: #155724;
  }
  </style>
  