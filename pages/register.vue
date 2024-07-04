<template>
    <div class="register-page">
      <div class="left">
        <img src="~/assets/logo-login.png" alt="GreenBinGuard Logo" class="logo">
      </div>
      <div class="right">
        <div class="form-container">
          <h2>Registrarme</h2>
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" v-model="nombre" required>
            </div>
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" v-model="password" required>
            </div>
            <NuxtLink to="/login"><button type="submit" class="register-button">Registrarme</button></NuxtLink>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const nombre = ref('')
  const email = ref('')
  const password = ref('')
  
  const register = () => {
    // Lógica para manejar el registro
    alert(`Registrado: ${nombre.value}, ${email.value}`)
  }
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    height: 100vh;
    background: url('~/assets/background1.png') no-repeat center center;
    background-size: cover;
  }
  
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    width: 200px;
    height: auto;
  }
  
  .right {
    flex: 1;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .form-container {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    justify-content: center;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .register-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #7ec041;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .register-button:hover {
    background-color: #6abf37;
  }
  </style>


  