<template>
  <div class="home-page">
    <div class="overlay">
      <img src="~/assets/logo-login.png" alt="GreenBinGuard Logo" class="logo">
      <nuxt-link to="/login"><button class="login-button">Ir al login / registro</button></nuxt-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('~/assets/background2.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
}

.overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.login-button {
  background-color: #7ec041;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #6abf37;
}
</style>
