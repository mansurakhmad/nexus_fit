import { computed } from 'vue';

import { useQuery } from '@tanstack/vue-query';

import { useAuthStore } from './useAuthStore';
import { getUserRequest } from '../logic';

export const useUserProfileQuery = () => {
  const authStore = useAuthStore();

  return useQuery({
    queryKey: computed(() => ['userProfile', authStore.user?.id]),
    queryFn: getUserRequest,
    enabled: computed(() => !!authStore.user?.id),
    staleTime: Infinity,
  });
};
