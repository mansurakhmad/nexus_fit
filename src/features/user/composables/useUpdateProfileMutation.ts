import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserProfileRequest } from '../logic';

import type { ProfileForm } from '../models';

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, data, error } = useMutation({
    mutationFn: (formValues: ProfileForm.FormValues) => sendUpdateUserProfileRequest(formValues),
    onSuccess: () => {
      console.log('trigger');
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
    onError: error => console.log('onError', error),
  });

  return {
    mutate,
    data,
    error,
  };
};
