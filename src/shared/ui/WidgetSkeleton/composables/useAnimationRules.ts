import { getRandomInt } from '@/shared/utils';
import { onMounted, useTemplateRef } from 'vue';

export const useAnimationRules = (refName: string) => {
  const leftVerticalLine = useTemplateRef<HTMLElement>(`${refName}leftVerticalLine`);
  const rightVerticalLine = useTemplateRef<HTMLElement>(`${refName}rightVerticalLine`);
  const topHorizontalLine = useTemplateRef<HTMLElement>(`${refName}topHorizontalLine`);
  const bottomHorizontalLine = useTemplateRef<HTMLElement>(`${refName}bottomHorizontalLine`);

  onMounted(() => {
    const setAnimationRules = (element: HTMLElement | null | undefined) => {
      if (element) {
        element.style.animationDuration = `${getRandomInt(3, 8)}s`;
        element.style.animationDirection = getRandomInt(0, 1) === 1 ? 'reverse' : '';
      }
    };

    setAnimationRules(leftVerticalLine.value);
    setAnimationRules(rightVerticalLine.value);
    setAnimationRules(topHorizontalLine.value);
    setAnimationRules(bottomHorizontalLine.value);
  });

  return {
    leftVerticalLine,
    rightVerticalLine,
    topHorizontalLine,
    bottomHorizontalLine,
  };
};
