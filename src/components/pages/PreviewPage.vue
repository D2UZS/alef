<template>
  <div class="preview-page">
    <app-container class="preview-page__container">
      <personal-data class="form-page__personal-data">
        <app-profile />
      </personal-data>
    </app-container>
  </div>
</template>

<script>
import AppContainer from "@/components/AppContainer";
import PersonalData from "@/components/PersonalData";
import AppProfile from "@/components/AppProfile";

export default {
  components: { AppContainer, PersonalData, AppProfile },
};
</script>

<style scoped></style>
