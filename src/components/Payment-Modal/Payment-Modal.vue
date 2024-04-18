<script setup>
import PaymentCard from '../Payment-Card/Payment-Card.vue'
import PaymentForm from '../Payment-Form/Payment-Form.vue'
import store from '@/store/store'
</script>

<template>
  <div class="modal">
    <PaymentCard v-if="!store.state.isFormSend"></PaymentCard>
    <PaymentForm v-if="!store.state.isFormSend"></PaymentForm>
  </div>
</template>

<style scoped lang="scss">
.modal {
  width: 650px;
  min-height: 400px;
  background: #fff;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  align-items: center;
}
</style>
