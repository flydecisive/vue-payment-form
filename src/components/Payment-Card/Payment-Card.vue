<script setup>
import VisaLogo from '../../assets/img/logos/Visa.svg'
import MastercardLogo from '../../assets/img/logos/mastercard.svg'
import MirLogo from '../../assets/img/logos/mir.svg'
import CardChipImg from '../../assets/img/card-chip.svg'
import store from '@/store/store'
</script>

<script>
export default {
  methods: {
    definePaymentSystemLogo() {
      const paymentSystem = store.state.paymentSystem
      if (paymentSystem === 'visa') {
        return VisaLogo
      } else if (paymentSystem === 'mastercard') {
        return MastercardLogo
      } else if (paymentSystem === 'мир') {
        return MirLogo
      }

      return ''
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card__header">
      <img :src="definePaymentSystemLogo()" alt="payment system" class="card__header_img" />
    </div>
    <div class="card__number">
      <img :src="CardChipImg" alt="card chip" class="card__number_img" />
      <p class="card__number_text">
        {{ store.state.cardNumber.length > 0 ? store.state.cardNumber : '#### #### #### ####' }}
      </p>
    </div>
    <div class="card__data">
      <div class="card__data_item">
        <label class="card__data_label">Name</label>
        <p class="card__data_text">
          {{
            store.state.cardholderName.length > 0 ? store.state.cardholderName : 'cardholder name'
          }}
        </p>
      </div>
      <div class="card__data_item">
        <label class="card__data_label">Expired Date</label>
        <p class="card__data_text">
          {{ store.state.expiration.length > 0 ? store.state.expiration : 'mm/yy' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: url('../../assets/img/payment-card-bg.svg');
  width: 327px;
  height: 178px;
  border-radius: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 20px 20px 24px;

  &__header {
    display: flex;
    justify-content: flex-end;

    &_img {
      width: 66px;
      max-height: 30px;
    }
  }

  &__number {
    display: flex;
    flex-flow: column nowrap;
    gap: 4px;

    &_img {
      width: 52px;
      height: 28px;
    }

    &_text {
      font-size: 16px;
      line-height: 20px;
      color: #383838;
      font-weight: 700;
    }
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    width: 100%;
    max-width: 100%;

    &_item {
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;
      color: #383838;
    }

    &_label {
      font-size: 10px;
      line-height: 12px;
      font-weight: 400;
    }

    &_text {
      font-size: 12px;
      line-height: 15px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
}
</style>
