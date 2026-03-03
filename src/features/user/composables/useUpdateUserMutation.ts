import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { sendUpdateUserRequest } from '../logic';

import type { ProfileForm } from '../models';

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  const { mutate, data, error } = useMutation({
    mutationFn: (formValues: ProfileForm.FormValues) => sendUpdateUserRequest(formValues),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['userProfile'] }),
    onError: error => console.log('onError', error),
  });

  return {
    mutate,
    data,
    error,
  };
};
