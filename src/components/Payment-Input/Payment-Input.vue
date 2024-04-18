<script>
export default {
  props: {
    value: String || Number,
    inputType: {
      type: String,
      default: 'text'
    },
    columnSpan: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      required: true
    },
    borderRight: {
      type: String
    },
    placeholder: String,
    maxLength: Number
  },
  computed: {
    styleWrapper() {
      return {
        'grid-column': `span ${this.columnSpan}`,
        'border-right': this.borderRight
      }
    }
  }
}
</script>

<template>
  <div class="payment__input_wrapper" :style="styleWrapper">
    <label class="payment__input_label">{{ label }}</label>
    <input
      :type="inputType"
      class="payment__input"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :value="value"
    />
  </div>
</template>

<style lang="scss" scoped>
.payment__input {
  border: none;
  font-size: 16px;
  line-height: 18px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &_wrapper {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #d9d9d9;
    padding: 7px 12px;
    color: #383838;
  }

  &_label {
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }
}
</style>
