<script setup lang="ts"></script>

<template>
  <div class="body">
    <h1>You did it!</h1>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  margin: 10px;
  background-color: var(--wine-100);
}
</style>
