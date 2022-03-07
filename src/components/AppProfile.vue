<template>
  <div class="app-profile">
    <div class="app-profile__person">Василий, 30 лет</div>
    <div class="app-profile__children">
      <span class="app-profile__children-title">Дети</span>
      <ul class="app-profile__children-list">
        <li class="app-profile__children-item">Петр, 10 лет</li>
        <li class="app-profile__children-item">Петр, 10 лет</li>
        <li class="app-profile__children-item">Петр, 10 лет</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.app-profile {
  &__person {
    margin-bottom: 60px;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  &__children {
    &-title {
      display: block;
      margin-bottom: 20px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }
    &-list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      list-style-type: none;
    }
    &-item {
      padding: 10px 20px;

      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      background: var(--gray-l-color);
      border-radius: 5px;
    }
  }
}
</style>
