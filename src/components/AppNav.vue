<template>
  <ul class="app-nav">
    <li class="app-nav__item">
      <router-link :to="`/`" class="app-nav__link">Форма</router-link>
    </li>
    <li class="app-nav__item">
      <router-link :to="`/preview`" class="app-nav__link">Превью</router-link>
    </li>
  </ul>
</template>

<script></script>

<style scoped lang="scss">
.app-nav {
  display: flex;
  align-items: center;
  gap: 24px;

  list-style-type: none;

  &__item {
  }

  &__link {
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-color);

    transition: color 0.1s linear;

    @media (hover: hover) {
      &:hover {
        color: var(--gray-dark-color);
      }
    }

    @media all {
      &:active {
        opacity: var(--active-opacity);
      }
    }

    &.router-link-active {
      color: var(--gray-dark-color);

      cursor: default;

      @media all {
        &:active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
