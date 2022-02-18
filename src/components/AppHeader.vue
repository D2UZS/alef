<template>
  <header class="app-header">
    <app-container class="app-header__container">
      <app-logo class="app-header__logo" />
      <app-nav class="app-header__nav" />
    </app-container>
  </header>
</template>

<script>
import AppContainer from "@/components/AppContainer";
import AppNav from "@/components/AppNav";

export default {
  components: { AppContainer, AppNav },
};
</script>

<style scoped lang="scss">
.app-header {
  padding: 22px 0;

  background: var(--white-color);
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

  &__container {
      display: flex;
      align-items: center;
  }

  &__logo {
    margin: 0 41px;
  }
  &__nav {
      margin: 0 auto;
  }
}
</style>
