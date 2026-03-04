import type { ProfileForm } from '../models';

import { api } from '@/shared/api';

export const sendUpdateUserRequest = async (formValues: ProfileForm.FormValues) => {
  const { data: authData, error: authError } = await api.auth.updateUser({
    data: {
      email: formValues.email,
      phone: `${formValues.phoneCode}${formValues.phoneNumber}`,
      display_name: `${formValues.firstName} ${formValues.lastName}`,
    },
  });

  if (authError) throw authError;

  if (!authData.user) throw new Error('User not found');

  const { error: profileError } = await api
    .from('profiles')
    .update({
      gender: formValues.gender,
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      username: formValues.username,
      phone_code: formValues.phoneCode,
      phone_number: formValues.phoneNumber,
      birthday: formValues.birthday,
    })
    .eq('id', authData.user.id);

  if (profileError) throw profileError;

  return [authData];
};
