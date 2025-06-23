<script setup lang="ts">

</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Witaj}</h2>
        <div class="modal-divider"></div>
      </div>
      <button class="modal-close" @click="$emit('close')">
        &times;</button>
    </div>
  </div>
</template>

<style scoped>

</style>