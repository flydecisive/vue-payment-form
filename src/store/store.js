import { createStore } from 'vuex'

const store = createStore({
  state: {
    paymentSystem: 'visa',
    cardNumber: '',
    expiration: '',
    cvc: '',
    cardholderName: '',
    isFormSend: false,
    isSendButtonDisabled: true
  },
  mutations: {
    handlePaymentSystem(state, value) {
      state.paymentSystem = value
    },
    setCardNumber(state, value) {
      state.cardNumber = value
    },
    setExpiration(state, value) {
      state.expiration = value
    },
    setCVC(state, value) {
      state.cvc = value
    },
    setCardholderName(state, value) {
      state.cardholderName = value
    },
    clearState(state) {
      state.paymentSystem = 'visa'
      state.cardNumber = ''
      state.expiration = ''
      state.cvc = ''
      state.cardholderName = ''
    },
    setIsFormSend(state) {
      state.isFormSend = !state.isFormSend
    },
    setIsSendButtonDisabled(state, value) {
      state.isSendButtonDisabled = !value
    }
  }
})

export default store
