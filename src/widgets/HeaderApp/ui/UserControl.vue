<script lang="ts" setup>
import { ref } from 'vue';

import { Popover } from 'primevue';
import { useRouter } from 'vue-router';

import { useLogout } from '@/features/logout';
import { useUserProfileQuery } from '@/features/user';
import { APP_ROUTERS_NAMES, APP_ROUTES } from '@/shared/config';
import { BaseButton } from '@/shared/ui';

const router = useRouter();
const { logout } = useLogout();
const { data } = useUserProfileQuery();
const op = ref<InstanceType<typeof Popover> | null>(null);

const togglePopoverState = (event: PointerEvent) => {
  if (!op.value) return;

  op.value.toggle(event);
};

const goToProfilePage = () => {
  if (op.value) op.value.hide();

  router.push(APP_ROUTES.PROFILE);
};

const getName = () => {
  if (!data.value) return '';

  if (data.value.profileData.username) return data.value.profileData.username;

  if (data.value.profileData.first_name && data.value.profileData.last_name) {
    return `${data.value.profileData.first_name} ${data.value.profileData.last_name}`;
  }

  return data.value.email;
};
</script>

<template>
  <Transition name="fade" appear>
    <div class="userControl" v-if="data && !$route.meta.isOnboarding">
      <BaseButton :value="`Hi, ${getName()}`" theme="outlineCyan" @click="togglePopoverState" />
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
