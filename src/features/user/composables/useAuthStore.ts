import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

import type { Session } from '@supabase/supabase-js';

import { PINIA_STORES_KEYS } from '@/shared/config';

export const useAuthStore = defineStore(PINIA_STORES_KEYS.AUTH, () => {
  const session = ref<Session | null>(null);
  const user = computed(() => session.value?.user ?? null);

  const setSession = (newSession: Session) => (session.value = newSession);

  return { session, user, setSession };
});
