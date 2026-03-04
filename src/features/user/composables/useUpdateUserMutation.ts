import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserRequest } from '../logic';

import type { ProfileForm } from '../models';

import { useBaseAlertStore } from '@/shared/ui';

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();
  const { triggerAlert } = useBaseAlertStore();

  const { mutate, data, error } = useMutation({
    mutationFn: (formValues: ProfileForm.FormValues) => sendUpdateUserRequest(formValues),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });

      triggerAlert({
        title: 'Success!',
        message: 'Your profile has been updated',
        closeTime: 4000,
        theme: 'default',
      });
    },
    onError: error => {
      triggerAlert({
        title: error.name || 'Error',
        message: error.message || 'Something went wrong',
        closeTime: 4000,
        theme: 'error',
      });
    },
  });

  return {
    mutate,
    data,
    error,
  };
};
