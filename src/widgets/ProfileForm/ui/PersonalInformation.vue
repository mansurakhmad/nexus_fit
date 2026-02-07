<script setup lang="ts">
import { ref } from 'vue';

import { DatePicker, Select } from 'primevue';

import FormSectionTitle from './FormSectionTitle.vue';

import { BaseInput, WidgetSkeleton } from '@/shared/ui';

const genderOptions = [
  { name: 'Male', code: 'XY' },
  { name: 'Female', code: 'XX' },
];

const date = ref();
</script>

<template>
  <WidgetSkeleton theme="Blue">
    <template #title>
      <FormSectionTitle>Personal Information</FormSectionTitle>
    </template>
    <template #content>
      <div class="formContent">
        <BaseInput labelValue="First Name *" :isValid="true" />
        <BaseInput labelValue="Last Name *" :isValid="true" />
        <DatePicker
          v-model="date"
          dateFormat="dd.mm.yy"
          placeholder="Enter your birthday *"
          fluid
        />
        <Select
          :options="genderOptions"
          :highlightOnSelect="false"
          optionLabel="name"
          placeholder="Select a Gender *"
          checkmark
          :pt="{ label: { style: 'text-align: left' } }"
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
