<template>
    <div>
      <Header />
      <Table />
    </div>
  </template>
  
  <script>
  import Header from '~/components/Header.vue'
  import Table from '~/components/Table.vue'
  
  export default {
    components: {
      Header,
      Table
    }
  }
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  </style>
  