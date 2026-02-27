<script setup lang="ts">
import { computed } from 'vue';

import { FloatLabel, InputNumber } from 'primevue';
import { useField } from 'vee-validate';

const phoneCodeField = useField<number>('phoneCode');
const phoneNumberField = useField<number>('phoneNumber');

const errorMessage = computed(() => {
  return phoneCodeField.errorMessage.value || phoneNumberField.errorMessage.value;
});
</script>

<template>
  <div class="phoneInput">
    <div class="fields">
      <FloatLabel class="wrapperCode">
        <label>Phone Code</label>
        <InputNumber
          class="code"
          v-model="phoneCodeField.value.value"
          :isValid="!phoneCodeField.errors.value.length"
          :useGrouping="false"
          :maxLength="4"
        />
      </FloatLabel>

      <FloatLabel class="wrapperNumber">
        <label>Mobile Phone</label>
        <InputNumber
          class="number"
          v-model="phoneNumberField.value.value"
          :isValid="!phoneNumberField.errors.value.length"
          :onlyDigits="true"
          :useGrouping="false"
        />
      </FloatLabel>
    </div>
    <template v-if="errorMessage">
      <div class="errorMessage">{{ errorMessage }}</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.phoneInput {
  position: relative;

  &:deep(.p-inputnumber-input) {
    width: 100%;
    background-color: var(--glass-white);
  }

  .fields {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .code {
    width: 150px;
    flex-shrink: 0;
  }

  .wrapperCode,
  .wrapperNumber {
    &:has(span[isvalid='false']) {
      label {
        color: var(--red-50);
        font-weight: 500;
      }
    }
  }

  .wrapperNumber,
  .number {
    width: 100%;
  }

  .errorMessage {
    position: absolute;
    left: 0;
    width: 100%;
    color: var(--red-50);
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    text-align: center;
    padding-top: 12px;
  }
}
</style>
