<template>
  <div class="app">
    <app-header class="app__header" />
    <main class="app__main">
      <router-view></router-view>
    </main>
    <app-footer class="app__footer" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header,
  &__main,
  &__footer {
    // width: 100%;
  }

  &__main {
    flex-grow: 1;
  }

}
</style>
