<template>
  <form class="profile-form">
    <div class="profile-form__base-data">
      <app-input class="profile-form__base-input" />
      <app-input class="profile-form__base-input" />
    </div>
    <div class="profile-form__children">
      <div class="profile-form__children-top">
        <span class="profile-form__children-title">Дети (макс. 5)</span>
        <button class="profile-form__children-btn-add">Добавить ребенка</button>
      </div>
      <ul class="profile-form__children-list">
        <li class="profile-form__children-item child-card">
          <app-input class="child-card__input" />
          <app-input class="child-card__input" />
          <input type="button" value="Удалить" />
        </li>
      </ul>
      <button class="profile-form__children-btn-save">Сохранить</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.profile-form {
}
</style>
