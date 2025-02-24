<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHome = () => {
  router.push("/");
};
</script>

<template>
  <button @click="navigateToHome" class="logo">CRM - Dashboard</button>
</template>

<style lang="scss" scoped>
.logo {
  background: none;
  border: 1px solid #000;
  border-radius: $border-radius-card;
  font-size: 17px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
