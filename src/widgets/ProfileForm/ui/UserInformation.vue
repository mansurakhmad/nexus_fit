<script setup lang="ts">
import { useField } from 'vee-validate';

import FormSectionTitle from './FormSectionTitle.vue';

import { BaseInput, AnimatedWrapper } from '@/shared/ui';

const usernameField = useField<string>('username');
</script>

<template>
  <AnimatedWrapper theme="Red" contentClass="step">
    <FormSectionTitle>App information</FormSectionTitle>
    <div class="formContent">
      <BaseInput
        labelValue="Username"
        v-model="usernameField.value.value"
        :isValid="!usernameField.errors.value.length"
        :errorMessage="usernameField.errorMessage.value"
        name="username"
      />
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
</style>
