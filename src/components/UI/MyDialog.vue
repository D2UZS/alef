<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "my-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: var(--background-color);
  border-radius: 10px;
  min-height: 200px;
  min-width: 400px;
  padding: var(--rhythm-3);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>