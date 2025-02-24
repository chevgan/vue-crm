<script setup lang="ts">
import { MENU_DATA } from "./menu.data";
</script>

<template>
  <aside class="sidebar">
    <NuxtLink
      v-for="item in MENU_DATA"
      :key="item.name"
      class="sidebar__item"
      :to="item.path"
    >
      <Icon :name="item.icon" size="24" />
      <span>{{ item.name }}</span>
    </NuxtLink>
    <Button class="sidebar__logout">
      <Icon name="lets-icons:sign-out-circle-light" size="24" />
      <span>Logout</span>
    </Button>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: start;
  background: rgba(246, 246, 246, 0.5);
  border-bottom-right-radius: $border-radius-card;
  border-top-right-radius: $border-radius-card;
  box-shadow: $shadow-card;
  gap: $spacing-xl;
  padding: $spacing-xl;
}

.sidebar__item {
  @include flex;
  color: $secondary-color;
  font-size: $font-size-sm;
  font-weight: $font-weight-bold;
  line-height: $line-height-base;
  text-decoration: none;
  gap: $spacing-md;
}

.sidebar__item:hover {
  color: $primary-color;
  transform: translateX(2px);
  transition: all 250ms ease;
}

.sidebar__logout {
  @include flex;
  margin-top: auto;
  border: none;
  border-radius: $border-radius-card;
  cursor: pointer;
  gap: $spacing-md;
  transform: translateY(0);
  transition: all 250ms ease;
  &:hover {
    transform: translateY(-3px);
  }
}
</style>
