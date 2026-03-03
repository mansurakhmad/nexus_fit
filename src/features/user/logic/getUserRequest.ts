import type { User } from '@/entities/User';

import { api } from '@/shared/api';

export const getUserRequest = async (): Promise<User.Model> => {
  const {
    data: { user },
    error,
  } = await api.auth.getUser();

  console.log('getUserRequest user', user);

  if (error) throw error;

  if (!user) throw new Error('User not found');

  const { data: profileData, error: profileError } = await api
    .from('profiles')
    .select('*')
    .eq('id', user?.id)
    .single<User.ProfileData>();

  if (profileError) throw profileError;

  return {
    ...user,
    profileData,
  };
};
