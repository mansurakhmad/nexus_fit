<script setup lang="ts">
import { ContentContainer, HeaderApp } from '@/widgets';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <HeaderApp class="header" />
    <ContentContainer class="content">
      <RouterView />
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  height: 100vh;
  background-color: var(--wine-100);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../shared/assets/appBg.jpg');

  .header {
    padding: 16px 0 0;
  }

  .content {
    margin-top: 40px;
    background-color: var(--glass-white);
    border-radius: 16px;
  }
}
</style>
