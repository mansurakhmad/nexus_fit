import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

import type { Session } from '@supabase/supabase-js';

import { api } from '@/shared/api';
import { PINIA_STORES_KEYS } from '@/shared/config';

export const useAuthStore = defineStore(PINIA_STORES_KEYS.AUTH, () => {
  const session = ref<Session | null>(null);
  const user = computed(() => session.value?.user ?? null);
  const isInitialized = ref(false);

  const init = async () => {
    if (isInitialized.value) return;

    const { data } = await api.auth.getSession();
    session.value = data.session;

    isInitialized.value = true;

    api.auth.onAuthStateChange((_event, newSession) => {
      session.value = newSession;
    });
  };

  const setSession = (newSession: Session) => {
    session.value = newSession;
  };

  return { session, user, setSession, init };
});
