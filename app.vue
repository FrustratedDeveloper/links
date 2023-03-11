<template>
  <div>
    <Footer :name="config.public.NAME"></Footer>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
