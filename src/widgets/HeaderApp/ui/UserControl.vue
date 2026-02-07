<script lang="ts" setup>
import { ref } from 'vue';

import { storeToRefs } from 'pinia';
import { Popover } from 'primevue';
import { useRouter } from 'vue-router';

import { useLogout } from '@/features/logout';
import { useAuthStore } from '@/features/user';
import { APP_ROUTERS_NAMES, APP_ROUTES } from '@/shared/config';
import { BaseButton } from '@/shared/ui';

const router = useRouter();
const { logout } = useLogout();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const op = ref<InstanceType<typeof Popover> | null>(null);

const togglePopoverState = (event: PointerEvent) => {
  if (!op.value) return;

  op.value.toggle(event);
};

const goToProfilePage = () => {
  if (op.value) op.value.hide();

  router.push(APP_ROUTES.PROFILE);
};
</script>

<template>
  <Transition name="fade" appear>
    <div class="userControl" v-if="user && !$route.meta.isOnboarding">
      <BaseButton :value="`Hi, ${user.email}`" theme="outlineCyan" @click="togglePopoverState" />
    </div>
  </Transition>
  <Popover ref="op" :close-on-escape="true">
    <div class="popupContent">
      <BaseButton
        v-if="$route.name !== APP_ROUTERS_NAMES.PROFILE"
        value="Personal Profile"
        theme="accent"
        @click="goToProfilePage"
      />
      <BaseButton value="Log out" theme="outline" @click="logout" />
    </div>
  </Popover>
</template>

<style lang="scss" scoped>
.userControl {
  position: relative;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.8s ease-in;
}

.popupContent {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
}
</style>
