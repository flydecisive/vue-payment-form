<script setup>
import PaymentSystemSelector from '../Payment-System-Selector/Payment-System-Selector.vue'
import PaymentInput from '../Payment-Input/Payment-Input.vue'
import PaymentButton from '../Payment-Button/Payment-Button.vue'
import store from '@/store/store'
</script>
<script>
const data = { isFormValid: false }
const cardholderNameRegex = ''
const numbersRegex = /^[0-9]*$/

export default {
  data() {
    return data
  },
  methods: {
    handleCardNumber(event) {
      const isValueValid = numbersRegex.test(event.target.value)
      if (isValueValid) {
        store.commit('setCardNumber', event.target.value)
      }
    },
    handleExpirationDate(event) {
      store.commit('setExpiration', event.target.value)
    },
    handleCVC(event) {
      store.commit('setCVC', event.target.value)
    },
    handleCardholderName(event) {
      store.commit('setCardholderName', event.target.value)
    }
  }
}
</script>

<template>
  <div class="form">
    <PaymentSystemSelector></PaymentSystemSelector>
    <div class="form__inputs">
      <PaymentInput
        :columnSpan="2"
        :label="'Cardholder name'"
        :placeholder="'Name Surname'"
        :value="store.state.cardholderName"
        @input="handleCardholderName"
      />
      <PaymentInput
        :columnSpan="2"
        :label="'Card number'"
        :placeholder="'1234 1234 1234 1234'"
        :maxLength="19"
        :value="store.state.cardNumber"
        @input="handleCardNumber"
      />
      <PaymentInput
        :label="'Expired'"
        :borderRight="'1px solid #d9d9d9'"
        :placeholder="'MM/YY'"
        :maxLength="5"
        :value="store.state.expiration"
        @input="handleExpirationDate"
      />
      <PaymentInput
        :label="'CVC'"
        :placeholder="'CVC'"
        :maxLength="3"
        :inputType="'password'"
        :value="store.state.cvc"
        @input="handleCVC"
      />
    </div>

    <PaymentButton />
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  align-items: flex-start;

  &__inputs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
}
</style>
