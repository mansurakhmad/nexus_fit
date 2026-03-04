<script setup lang="ts">
import { DatePicker } from 'primevue';
import { useField } from 'vee-validate';

import type { BaseDatePickerTypes } from '../models';

import { ErrorMessage } from '@/shared/ui/ErrorMessage';

const { dateFormat, name, placeholder, onlyPast, maxDate } =
  defineProps<BaseDatePickerTypes.Props>();
const datepicker = useField<Date>('birthday');

const maxDateValue = onlyPast ? maxDate || new Date() : undefined;
</script>

<template>
  <div class="baseDatePicker">
    <DatePicker
      v-model="datepicker.value.value"
      :dateFormat="dateFormat"
      :placeholder="placeholder"
      :name="name"
      :maxDate="maxDateValue"
      fluid
    />
    <ErrorMessage
      v-if="datepicker.errors.value.length && datepicker.errorMessage.value"
      :message="datepicker.errorMessage.value"
    />
  </div>
</template>

<style lang="scss" scoped>
.baseDatePicker {
  position: relative;
}
</style>
