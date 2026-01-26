<script setup lang="ts">
import { LoginForm } from '@/widgets/LoginForm';
</script>

<template>
  <div>
    <h2 class="title">Log in to your account</h2>
    <div class="content">
      <LoginForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 24px;
}

.banner {
  width: 400px;
  border-radius: 16px;
  opacity: 0.75;
  object-fit: cover;
}
</style>
