<script lang="ts" setup>
import { Dialog } from 'primevue';
import type { BaseAlertTypes } from '../models';

const { isVisible, themeValue = 'default' } = defineProps<BaseAlertTypes.Props>();
</script>

<template>
  <Dialog
    class="baseDialog"
    position="bottom"
    :class="`${themeValue}Theme`"
    :visible="isVisible"
    :draggable="false"
    :closable="false"
  >
    <h4 class="title">
      <slot name="title"></slot>
    </h4>
    <p class="message">
      <slot name="message"></slot>
    </p>
  </Dialog>
</template>

<style lang="scss">
.baseDialog {
  border: none;
  color: var(--white-100);
  box-shadow:
    -10px 0 13px -7px var(--black-100),
    10px 0 13px -7px var(--black-100),
    5px 5px 15px 5px var(--black-100);

  &.defaultTheme {
    background-color: var(--wine-150);
  }

  &.errorTheme {
    background-color: var(--wine-100);
  }
}
</style>
