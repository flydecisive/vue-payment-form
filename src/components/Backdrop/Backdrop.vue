<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import PaymentModal from '../Payment-Modal/Payment-Modal.vue'
</script>

<template>
  <div class="backdrop">
    <PaymentModal></PaymentModal>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  width: 100%;
  height: 100%;
  background: #ede8ff;
  display: grid;
  place-items: center;
}
</style>
