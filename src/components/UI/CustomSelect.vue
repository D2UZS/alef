<template>
  <div class="custom-select">
    <select
      class="custom-select__select"
      v-model="modelValue"
      @change="changeOption"
    >
      <option disabled value="">По умолчанию</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "custom-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;

  &:after {
    content: "";

    position: absolute;
    top: 50%;
    right: var(--rhythm-2);
    transform: translateY(-50%);
    z-index: 1;

    display: block;
    width: 7px;
    height: 7px;

    background-image: url(~@/assets/images/icons/arrow.svg);
    background-position: center;
    background-repeat: no-repeat;

    pointer-events: none;
  }

  &__select {
    display: block;
    width: 100%;
    padding: {
      top: 10px;
      right: 28px;
      bottom: 11px;
      left: 16px;
    }

    font-size: 12px;
    line-height: 15px;
    color: var(--grey-color);

    background-color: var(--background-color);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    cursor: pointer;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: 1px solid var(--grey-color);
    }
  }
}
</style>