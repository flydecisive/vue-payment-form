<script setup>
import ChevronLogo from '../../assets/img/chevron-down.svg'
import store from '@/store/store'
</script>
<script>
export default {
  data() {
    return {
      isSelectorClicked: false
    }
  },
  methods: {
    handleSelectorItem(event) {
      store.commit('handlePaymentSystem', event.target.textContent.toLowerCase())
      this.isSelectorClicked = !this.isSelectorClicked
    }
  },
  computed: {
    buttonImg() {
      return {
        transform: this.isSelectorClicked ? 'rotate(180deg)' : 'rotate(0deg)'
      }
    }
  }
}
</script>

<template>
  <div class="selector__wrapper">
    Payment system:
    <div class="selector">
      <div class="selector__button" @click="isSelectorClicked = !isSelectorClicked">
        {{ store.state.paymentSystem }}
        <img :src="ChevronLogo" alt="chevron" class="selector__button_img" :style="buttonImg" />
      </div>

      <div class="selector__dropdown" v-if="isSelectorClicked">
        <ul class="selector__dropdown_list">
          <li class="selector__dropdown_item" @click="handleSelectorItem">Visa</li>
          <li class="selector__dropdown_item" @click="handleSelectorItem">MasterCard</li>
          <li class="selector__dropdown_item" @click="handleSelectorItem">Мир</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selector {
  position: relative;

  &__button {
    text-transform: capitalize;
    color: #383838;
    font-weight: 600;
    font-size: 16px;
    line-break: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px;
    box-sizing: border-box;
    background: #dfdefb;
    border-radius: 6px;

    &_img {
      width: 20px;
      height: 20px;
      transition: all 0.3s;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    background: #eae9fb;
    border-radius: 6px;
    padding: 6px;
    box-sizing: border-box;
    z-index: 20;

    &_list {
      list-style-type: none;
      display: flex;
      flex-flow: column nowrap;
      gap: 4px;
    }

    &_item {
      color: #383838;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
  }

  &__wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>
