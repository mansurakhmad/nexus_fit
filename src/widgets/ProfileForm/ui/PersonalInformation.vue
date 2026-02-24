<script setup lang="ts">
import { Select } from 'primevue';
import { useField } from 'vee-validate';

import FormSectionTitle from './FormSectionTitle.vue';

import { BaseInput, WidgetSkeleton } from '@/shared/ui';
import { BaseDatePicker } from '@/shared/ui/BaseDatePicker';

const genderOptions = [
  { name: 'Male', code: 'XY' },
  { name: 'Female', code: 'XX' },
];

const firstNameField = useField<string>('firstName');
const lastNameField = useField<string>('lastName');
const { value: gender } = useField<string>('gender');
</script>

<template>
  <WidgetSkeleton theme="Blue">
    <template #title>
      <FormSectionTitle>Personal Information</FormSectionTitle>
    </template>
    <template #content>
      <div class="formContent">
        <BaseInput
          labelValue="First Name *"
          v-model="firstNameField.value.value"
          :isValid="!firstNameField.errors.value.length"
          :errorMessage="firstNameField.errorMessage.value"
        />
        <BaseInput
          labelValue="Last Name *"
          v-model="lastNameField.value.value"
          :isValid="!lastNameField.errors.value.length"
          :errorMessage="lastNameField.errorMessage.value"
          name="lastName"
        />
        <BaseDatePicker
          labelValue="Birthday *"
          placeholder="Enter your birthday *"
          dateFormat="dd.mm.yy"
          :onlyPast="true"
        />
        <Select
          v-model="gender"
          :options="genderOptions"
          :highlightOnSelect="false"
          :pt="{ label: { style: 'text-align: left' } }"
          optionValue="code"
          optionLabel="name"
          placeholder="Select a Gender *"
          checkmark
          fluid
        />
      </div>
    </template>
  </WidgetSkeleton>
</template>

<style lang="scss" scoped>
.formContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 16px;
}
</style>
