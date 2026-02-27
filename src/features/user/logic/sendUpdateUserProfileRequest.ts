import type { ProfileForm } from '../models';

import { api } from '@/shared/api';

export const sendUpdateUserProfileRequest = async (FormValues: ProfileForm.FormValues) => {
  const payload = { full_name: `${FormValues.firstName} ${FormValues.lastName}` };

  const { data, error } = await api.auth.updateUser({
    data: { display_name: payload.full_name },
  });

  if (error) throw error;
  return data.user;
};
