<template>
  <div class="app">
    <div class="app__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.app {
  min-height: 100vh;

  &__container {
    width: 100%;
    max-width: var(--max-width-container);
    margin: 0 auto;

    padding: {
      top: var(--safe-padding);
      bottom: var(--safe-padding);
      left: var(--safe-padding);
      right: var(--safe-padding);
    }
  }
}
</style>