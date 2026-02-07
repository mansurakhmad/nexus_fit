<script setup lang="ts">
import ContactInformation from './ContactInformation.vue';
import DocumentInformation from './DocumentInformation.vue';
import PersonalInformation from './PersonalInformation.vue';

import { BaseButton } from '@/shared/ui';
</script>

<template>
  <PersonalInformation />
  <ContactInformation />
  <DocumentInformation />
  <BaseButton value="Submit" type="submit" theme="accent" class="submitButton" />
</template>

<style lang="scss" scoped>
.submitButton {
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
}
</style>
