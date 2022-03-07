<template>
  <div class="form-page">
    <app-container class="form-page__container">
      <personal-data class="form-page__personal-data">
        <ProfileForm />
      </personal-data>
    </app-container>
  </div>
</template>

<script>
import AppContainer from "@/components/AppContainer";
import PersonalData from "@/components/PersonalData";
import ProfileForm from "@/components/ProfileForm";

export default {
  components: { AppContainer, PersonalData, ProfileForm },
};
</script>

<style scoped lang="scss"></style>
