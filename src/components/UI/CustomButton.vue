<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
};
</script>

<style scoped lang="scss">
.custom-button {
  padding: {
    top: 10px;
    right: 10px;
    bottom: 11px;
    left: 10px;
  }

  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #fff;

  background-color: var(--success-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: var(--transition-1);

  @media (hover: hover) {
    &:hover {
      background-color: var(--success-d-color);
    }
  }

  @media all {
    &:active {
      background-color: var(--success-l-color);
    }
  }

  &:disabled {
    color: var(--grey-color);

    background-color: var(--grey-l-color);
    cursor: default;
    box-shadow: none;

    @media (hover: hover) {
      &:hover {
        background-color: var(--grey-l-color);
      }
    }

    @media all {
      &:active {
        background-color: var(--grey-l-color);
      }
    }
  }
}
</style>