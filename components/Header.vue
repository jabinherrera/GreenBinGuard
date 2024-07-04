<template>
    <header class="header">
      <div class="header-left">
        <h3>Nombre empresa</h3>
      </div>
      <div class="header-right">
        <span>Usuario</span>
        <i class="fas fa-user-circle"></i>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #7ec041;
    color: white;
  }
  .header-left h1 {
    margin: 0;
  }
  .header-right {
    display: flex;
    align-items: center;
  }
  .header-right i {
    font-size: 24px;
    margin-left: 10px;
  }
  </style>
  