import { ref, watch } from 'vue';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';

import { zodSchema, type ProfileForm } from '../models';
import { useUserProfileQuery } from './useUserProfileQuery';

export const useProfileForm = () => {
  const { data: savedProfileData } = useUserProfileQuery();
  const steps = ref<ProfileForm.Step[]>([
    {
      title: 'Personal Information',
      key: 'p_inf',
      id: 1,
      fields: ['firstName', 'lastName', 'birthday', 'gender'],
      hasErrors: false,
    },
    {
      title: 'Contact Information',
      key: 'c_inf',
      id: 2,
      fields: ['email', 'phoneCode', 'phoneNumber'],
      hasErrors: false,
    },
    {
      title: 'App information',
      key: 'a_inf',
      id: 3,
      fields: ['username'],
      hasErrors: false,
    },
  ]);

  const currentStep = ref(1);

  const validationSchema = toTypedSchema(zodSchema);

  const checkCurrentStepErrors = () => {
    const i = currentStep.value - 1;
    steps.value[i]!.hasErrors = steps.value[i]!.fields.some(field => errors.value[field]);
  };

  const changeStep = (step: number) => {
    checkCurrentStepErrors();

    if (step === 0) currentStep.value = 1;
    else currentStep.value = step;
  };

  const { handleSubmit, values, errors, resetForm } = useForm({
    validationSchema,
    validateOnMount: false,
  });

  watch(
    savedProfileData,
    () => {
      resetForm({
        values: {
          firstName: savedProfileData.value?.profileData.first_name || '',
          lastName: savedProfileData.value?.profileData.last_name || '',
          email: savedProfileData.value?.email || '',
          gender: savedProfileData.value?.profileData.gender || '',
          username: savedProfileData.value?.profileData.username || '',
          phoneCode: savedProfileData.value?.profileData.phone_code || undefined,
          phoneNumber: savedProfileData.value?.profileData.phone_number || undefined,
          birthday: savedProfileData.value?.profileData.birthday
            ? new Date(savedProfileData.value?.profileData.birthday)
            : undefined,
        },
      });
    },
    { immediate: true }
  );

  const handleFormValid = () => {
    if (!errors.value) return true;

    const valuesArr = Object.values(values);
    return valuesArr.every(Boolean);
  };

  return { handleSubmit, handleFormValid, steps, currentStep, changeStep };
};
