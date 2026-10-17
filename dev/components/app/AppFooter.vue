<script setup lang='ts'>
const version = ref(import.meta.env.VITE_APP_VERSION)
</script>

<template>
  <div class="mt-8 layout-footer text-center text-gray-700">
    <span class="font-medium ml-2">Formkit (2.1.x) - OpenVue (1.0.x) - FormKit-OpenVue-Version {{ version }} - sfxcode 2026</span>
  </div>
</template>

<style scoped>

</style>
