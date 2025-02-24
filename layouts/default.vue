<script setup lang="ts">
console.log("layout loaded");
</script>

<template>
  <div class="layout">
    <div class="header">
      <LayoutHeader />
    </div>
    <div class="content">
      <LayoutSidebar />
      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: grid;
  grid-template-columns: 250px 6fr;
  flex: 1;
}

.header {
  height: $header-height;
}

.main {
}
</style>
