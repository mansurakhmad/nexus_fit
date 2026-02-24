<script setup lang="ts">
const { message } = defineProps<{ message: string }>();
</script>

<template>
  <div class="errorMessage">{{ message }}</div>
</template>

<style lang="scss" scoped>
.errorMessage {
  position: absolute;
  left: 0;
  width: 100%;
  color: var(--red-50);
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  padding-top: 12px;
}
</style>
