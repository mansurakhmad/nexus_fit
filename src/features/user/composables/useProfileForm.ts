import { ref } from 'vue';

import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';

import { zodSchema, type ProfileForm } from '../models';

export const useProfileForm = () => {
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

  const { handleSubmit, values, errors } = useForm({
    validationSchema,
    validateOnMount: false,
  });

  const handleFormValid = () => {
    if (!errors.value) return true;

    const valuesArr = Object.values(values);
    return valuesArr.every(Boolean);
  };

  return { handleSubmit, handleFormValid, steps, currentStep, changeStep };
};
