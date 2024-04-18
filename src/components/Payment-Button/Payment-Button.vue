<script setup>
import store from '@/store/store'
</script>
<script>
export default {
  methods: {
    handleButton(event) {
      event.preventDefault()
      store.commit('clearState')
      store.commit('isFormSend')
    }
  }
}
</script>

<template>
  <button class="button" @click="handleButton" :disabled="store.state.isSendButtonDisabled">
    Отправить
  </button>
</template>

<style scoped lang="scss">
.button {
  border: none;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  background: #675dff;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: auto;
    background: #d9d9d9;
  }
}
</style>
