<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .app-container {
    width: 100%;
    max-width: var(--max-width-container);
    margin: 0 auto;

    padding: 0 var(--safe-padding);
  }
</style>

