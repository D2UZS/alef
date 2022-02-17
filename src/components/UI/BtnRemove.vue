<template>
  <button class="btn-remove"></button>
</template>

<script>
export default {
  name: "btn-remove",
};
</script>

<style scoped lang="scss">
.btn-remove {
  width: 32px;
  height: 32px;

  background-image: url(~@/assets/images/icons/delete.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--warning-color);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: var(--transition-1);

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  @media all {
    &:active {
      transform: scale(1);
    }
  }
}
</style>