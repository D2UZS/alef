<template>
  <textarea :value="modelValue" @input="updateInput" class="custom-textarea">
		<slot></slot>
	</textarea
  >
</template>

<script>
export default {
  name: "custom-textarea",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.custom-textarea {
  width: 100%;
  height: 108px;
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
  resize: none;

  &::placeholder {
    color: var(--grey-color);
  }

  &:focus {
    outline: 1px solid var(--grey-color);
  }
}
</style>