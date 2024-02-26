<template>
  <div class="wrapper">
    <div class="title-block">
      <span class="result">{{result}}</span>
    </div>
    <ButtonComponent
        class="btn"
        :variant="BUTTON_VARIANT.PRIMARY"
        :on-click="() => store.sendNull()"
    >
      играть снова
    </ButtonComponent>
  </div>
</template>

<script setup lang="ts">
import type {RESULT} from "@/types/enums";
import {BUTTON_VARIANT} from "@/types/enums";
import ButtonComponent from "@/components/common/button/ButtonComponent.vue";
import {useCommonStore} from "@/stores/commonStore";

const store = useCommonStore()

defineProps<({
  result: RESULT
})>()
</script>

<style lang="scss">
@import 'result-game';
</style>