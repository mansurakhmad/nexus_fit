<script setup lang="ts">
import { useField } from 'vee-validate';

import FormSectionTitle from './FormSectionTitle.vue';
import PhoneInput from './PhoneInput.vue';

import { WidgetSkeleton } from '@/shared/ui';
import BaseInput from '@/shared/ui/BaseInput/ui/BaseInput.vue';

const emailField = useField<string>('email');
</script>

<template>
  <WidgetSkeleton theme="Gold">
    <template #title>
      <FormSectionTitle>Contact Information</FormSectionTitle>
    </template>
    <template #content>
      <div class="formContent">
        <BaseInput
          labelValue="Email"
          v-model="emailField.value.value"
          :isValid="!emailField.errors.value.length"
          :errorMessage="emailField.errorMessage.value"
        />
        <PhoneInput />
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
</style>
