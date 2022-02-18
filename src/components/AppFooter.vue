<template>
  <footer class="app-footer">
    <app-container class="app-footer__container">
      <a class="app-footer__copyright" href="#">all rights reserved</a>
    </app-container>
  </footer>
</template>

<script>
import AppContainer from "@/components/AppContainer";

export default {
  components: { AppContainer },
};
</script>

<style scoped lang="scss">
.app-footer {
  padding: 30px 0;

  background: var(--gray-m-color);
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

  &__container {
    display: flex;
    align-items: center;
  }

  &__copyright {
    margin: 0 auto;

    font-size: 13px;
    line-height: 16px;
    color: var(--black-color);
    transition: color .1s linear;

    @media all {
      &:active {
        opacity: var(--active-opacity);
      }
    }
  }
}
</style>
