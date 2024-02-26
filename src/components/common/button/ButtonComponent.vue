<template>
  <button
      class="button"
      :class="{'primary' : variant === BUTTON_VARIANT.PRIMARY, 'ghost': variant === BUTTON_VARIANT.GHOST}"
      @click="onClick"
  >
      <slot />
  </button>
</template>

<script setup lang="ts">
import {BUTTON_VARIANT} from "@/types/enums";

defineProps<({
  variant: BUTTON_VARIANT,
  onClick: () => void,
})>()
</script>

<style lang="scss">
@import 'button';
</style>