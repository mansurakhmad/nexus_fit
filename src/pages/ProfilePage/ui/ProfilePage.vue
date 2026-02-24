<script setup lang="ts">
import { ProfileForm } from '@/widgets/ProfileForm';
</script>

<template>
  <div class="profilePage">
    <h2 class="title">Personal Profile</h2>
    <ProfileForm />
  </div>
</template>

<style lang="scss" scoped>
.profilePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  width: 100%;
  padding-bottom: 64px;
}

.title {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
}
</style>
