<template>
  <section class="personal-data">
    <div class="personal-data__inner">
      <h1 class="personal-data__title">Персональные данные</h1>
      <div class="personal-data__content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.personal-data {
  max-width: 616px;
  margin: 0 auto;
  padding: 30px 0;

  &__title {
    margin-bottom: 20px;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
