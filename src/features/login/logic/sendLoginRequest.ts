import type { Login } from '../models';

import { api } from '@/shared/api';

export const sendLoginRequest = async (dataToServer: Login.BodyData) => {
  const { data, error } = await api.auth.signInWithPassword(dataToServer);

  if (error) throw error;

  return data;
};
