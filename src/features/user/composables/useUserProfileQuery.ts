import { useQuery } from '@tanstack/vue-query';

import { useAuthStore } from './useAuthStore';
import { getUserRequest } from '../logic';

export const useUserProfileQuery = () => {
  const authStore = useAuthStore();

  return useQuery({
    queryKey: ['userProfile', authStore.user?.id],
    queryFn: getUserRequest,
    enabled: !!authStore.user?.id,
    staleTime: Infinity,
  });
};
