<template>
  <div class="custom-input-wrap">
    <input
      :value="modelValue"
      @input="updateInput"
      @blur="validationInput"
      class="custom-input"
      :class="{ 'custom-input--error': isError }"
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :id="id"
    />
    <span class="custom-input-wrap__error" v-show="isError"
      >Поле является обязательным</span
    >
  </div>
</template>

<script>
export default {
  name: "custom-input",
  data() {
    return {
      isError: false,
    };
  },
  props: {
    modelValue: [String, Number],
    placeholder: [String, Number],
    id: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.validationInput(event);
    },
    validationInput(event) {
      if (!event.target.value) {
        this.isError = true;
      } else {
        this.isError = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.custom-input-wrap {
  position: relative;

  &__error {
    position: absolute;
    left: 0;
    bottom: -4px;
    transform: translateY(100%);

    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;

    color: var(--warning-color);
  }
}
.custom-input {
  width: 100%;
  padding: {
    top: 10px;
    right: 16px;
    bottom: 11px;
    left: 16px;
  }

  font-size: 12px;
  line-height: 15px;
  color: var(--main-color);

  background-color: var(--background-color);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;

  &::placeholder {
    color: var(--grey-color);
  }

  &:focus {
    outline: 1px solid var(--grey-color);
  }

  &--error {
    outline: 1px solid var(--warning-color);
    &:focus {
      outline: 1px solid var(--warning-color);
    }
  }
}
</style>