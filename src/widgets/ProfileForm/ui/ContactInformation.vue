<script setup lang="ts">
import FormSectionTitle from './FormSectionTitle.vue';

import { WidgetSkeleton } from '@/shared/ui';
import BaseInput from '@/shared/ui/BaseInput/ui/BaseInput.vue';
</script>

<template>
  <WidgetSkeleton theme="Gold">
    <template #title>
      <FormSectionTitle>Contact Information</FormSectionTitle>
    </template>
    <template #content>
      <div class="formContent">
        <BaseInput labelValue="Email" :isValid="true" />
        <div class="wrapperMobilePhone">
          <BaseInput labelValue="Phone Code" :isValid="true" class="code" />
          <BaseInput labelValue="Mobile Phone" :isValid="true" class="phoneNumber" />
        </div>
      </div>
    </template>
  </WidgetSkeleton>
</template>

<style lang="scss" scoped>
.formContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.wrapperMobilePhone {
  display: flex;
  align-items: center;
  gap: 8px;

  .code {
    width: 150px;
    flex-shrink: 0;
  }

  .phoneNumber {
    width: 100%;
  }
}
</style>
