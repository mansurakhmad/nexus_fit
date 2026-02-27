import { api } from '@/shared/api';

export const getUserRequest = async () => {
  const {
    data: { user },
    error,
  } = await api.auth.getUser();
  console.log('user', user);
  if (error) throw error;

  return user;
};
