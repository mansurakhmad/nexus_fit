<script setup lang="ts">
import FormSectionTitle from './FormSectionTitle.vue';

import { WidgetSkeleton } from '@/shared/ui';
</script>

<template>
  <WidgetSkeleton theme="Red">
    <template #title>
      <FormSectionTitle>Document information</FormSectionTitle>
    </template>
    <template #content>
      <div>body</div>
    </template>
  </WidgetSkeleton>
</template>
