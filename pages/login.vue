<template>
    <div class="login-page">
      <div class="left">
        <img src="~/assets/logo-login.png" alt="GreenBinGuard Logo" class="logo">
      </div>
      <div class="right">
        <div class="form-container">
          <h2>Iniciar sesión</h2>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
              <a href="#" class="forgot-password">Olvidé mi contraseña</a>
            </div>
            <NuxtLink to="/detalle-container"><button type="submit" class="login-button">Iniciar sesión</button></NuxtLink>
            <div class="register-link">
              <span>Aún no tengo cuenta,</span>
              <nuxt-link to="/register">Registrarme</nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const login = () => {
    // Lógica para manejar el inicio de sesión
    alert(`Iniciando sesión: ${email.value}`)
  }
  </script>
  
  <style scoped>
  .login-page {
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
  
  .forgot-password {
    display: block;
    text-align: right;
    margin-bottom: 15px;
    color: #007bff;
    text-decoration: none;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  .login-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #7ec041;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-button:hover {
    background-color: #6abf37;
  }
  
  .register-link {
    text-align: center;
    margin-top: 15px;
  }
  
  .register-link span {
    margin-right: 5px;
  }
  
  .register-link a {
    color: #007bff;
    text-decoration: none;
  }
  
  .register-link a:hover {
    text-decoration: underline;
  }
  </style>
  