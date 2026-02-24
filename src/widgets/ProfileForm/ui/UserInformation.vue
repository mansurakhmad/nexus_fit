<script setup lang="ts">
import { useField } from 'vee-validate';

import FormSectionTitle from './FormSectionTitle.vue';

import { BaseInput, WidgetSkeleton } from '@/shared/ui';

const usernameField = useField<string>('username');
</script>

<template>
  <WidgetSkeleton theme="Red">
    <template #title>
      <FormSectionTitle>App information</FormSectionTitle>
    </template>
    <template #content>
      <div class="formContent">
        <BaseInput
          labelValue="Username"
          v-model="usernameField.value.value"
          :isValid="!usernameField.errors.value.length"
          :errorMessage="usernameField.errorMessage.value"
          name="username"
        />
      </div>
    </template>
  </WidgetSkeleton>
</template>
