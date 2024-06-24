<template>
  <div>
    <h1>GreenBinGuard</h1>
    <p v-for="item in mqttData" :key="item.topic">{{ item.topic }}: {{ item.value }}</p>
  </div>
</template>

<script>

</script>
