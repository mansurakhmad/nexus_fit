<script setup lang="ts">
import { useField } from 'vee-validate';

import FormSectionTitle from './FormSectionTitle.vue';
import PhoneInput from './PhoneInput.vue';

import { AnimatedWrapper } from '@/shared/ui';
import BaseInput from '@/shared/ui/BaseInput/ui/BaseInput.vue';

const emailField = useField<string>('email');
</script>

<template>
  <AnimatedWrapper theme="Gold" contentClass="step">
    <FormSectionTitle>Contact Information</FormSectionTitle>
    <div class="formContent">
      <BaseInput
        labelValue="Email"
        v-model="emailField.value.value"
        :isValid="!emailField.errors.value.length"
        :errorMessage="emailField.errorMessage.value"
      />
      <PhoneInput />
    </div>
  </AnimatedWrapper>
</template>

<style lang="scss" scoped>
:deep(.step) {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 16px;
}

.formContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
</style>
