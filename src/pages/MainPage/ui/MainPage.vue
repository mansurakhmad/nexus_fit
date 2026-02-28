<script setup lang="ts">
import { useUserProfileQuery } from '@/features/user';
import { AnimatedWrapper } from '@/shared/ui';

const { data } = useUserProfileQuery();
console.log(data);
</script>

<template>
  <div class="mainPage">
    <AnimatedWrapper theme="Blue">
      <div>Fitness Lab</div>
    </AnimatedWrapper>

    <AnimatedWrapper theme="Gold">
      <div>FinTech App</div>
    </AnimatedWrapper>

    <AnimatedWrapper theme="Red">
      <div>Task Manager</div>
    </AnimatedWrapper>
  </div>
</template>

<style lang="scss" scoped>
.mainPage {
  display: grid;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 150px);
  grid-template-columns: repeat(3, 1fr);
}
</style>
