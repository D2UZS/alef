<template>
  <h1 class="page-title"><slot></slot></h1>
</template>

<script>
export default {
  name: "page-title",
};
</script>

<style scoped lang="scss">
.page-title {
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;

  color: var(--main-color);
}
</style>