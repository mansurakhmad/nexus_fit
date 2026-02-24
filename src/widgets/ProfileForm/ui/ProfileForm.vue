<script setup lang="ts">
import ContactInformation from './ContactInformation.vue';
import PersonalInformation from './PersonalInformation.vue';
import UserInformation from './UserInformation.vue';

import { useProfileForm } from '@/features/user';
import { BaseButton } from '@/shared/ui';

const { handleSubmit, handleFormValid, steps, changeStep, currentStep } = useProfileForm();

const onSubmit = handleSubmit(
  values => {
    console.log('Данные всей формы:', values);
  },
  errors => {
    console.log('Errors:', errors);
  }
);
</script>

<template>
  <ul class="stepControls">
    <li
      v-for="step in steps"
      :key="step.id"
      class="step"
      :class="step.hasErrors && step.id !== currentStep ? 'hasError' : ''"
    >
      <i class="pi pi-info-circle"></i>
      <button
        class="title"
        :class="step.id === currentStep ? 'active' : ''"
        @click="changeStep(step.id)"
      >
        {{ step.title }}
      </button>
    </li>
  </ul>
  <form class="profileForm" @submit.prevent="onSubmit">
    <PersonalInformation v-show="currentStep === 1" />
    <ContactInformation v-show="currentStep === 2" />
    <UserInformation v-show="currentStep === 3" />
    <div class="stepButtons">
      <BaseButton
        value="Prev"
        type="button"
        theme="outline"
        class="stepButton"
        @click="changeStep(currentStep - 1)"
        :disabled="currentStep === 1"
      />
      <BaseButton
        value="Next"
        type="button"
        theme="outlineCyan"
        class="stepButton"
        @click="changeStep(currentStep + 1)"
        v-if="currentStep !== 3"
      />
      <BaseButton
        value="Submit"
        type="submit"
        theme="accent"
        class="submitButton"
        :disabled="!handleFormValid()"
        v-else
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.stepControls {
  display: flex;
  align-items: center;
  gap: 32px;

  .step {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &:deep(.pi-info-circle) {
      color: var(--red-50);
      opacity: 0;
    }

    &.hasError {
      &:deep(.pi-info-circle) {
        opacity: 1;
      }
    }
  }

  .title {
    color: var(--white-100);
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    border-bottom: 1px solid transparent;
    padding-bottom: 8px;

    &.active {
      color: var(--cyan-10);
      border-bottom: 1px solid var(--cyan-10);
    }
  }
}

.profileForm {
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 100%;
}

.stepButtons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.stepButton,
.submitButton {
  width: 100%;
  max-width: 300px;
}
</style>
