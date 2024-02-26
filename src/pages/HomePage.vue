<template>
  <HeaderCommon />
    <main>
        <template v-if="store.currentFingering">
          <GameComponent />
        </template>
        <template v-else>
          <SelectComponent />
        </template>

      <div class="info">
        <img
            v-if="rulesVisible && !store.isBonusActive"
            src="../assets/image-rules.svg"
            class="rule"
        />
        <img
            v-else-if="rulesVisible && store.isBonusActive"
            src="../assets/image-rules-bonus.svg"
            class="rule"
        />
        <div class="button-block">
          <ButtonComponent :on-click="store.toggleBonusActive" :variant="BUTTON_VARIANT.GHOST">бонус</ButtonComponent>
          <ButtonComponent :on-click="() => rulesVisible = !rulesVisible" :variant="BUTTON_VARIANT.GHOST">правила</ButtonComponent>
          <ButtonComponent :on-click="() => store.sendNull()" :variant="BUTTON_VARIANT.GHOST" class="none">играть снова</ButtonComponent>
        </div>
      </div>



    </main>
</template>

<script setup lang="ts">
import {useCommonStore} from '@/stores/commonStore';
import SelectComponent from '@/components/common/select/SelectComponent.vue'
import GameComponent from '@/components/common/game/GameComponent.vue'
import HeaderCommon from "@/components/common/Header/HeaderCommon.vue";
import ButtonComponent from "@/components/common/button/ButtonComponent.vue";
import {BUTTON_VARIANT} from "@/types/enums";
import {ref} from "vue";

const store = useCommonStore()
const rulesVisible = ref(false)
</script>


<style lang="scss">
@import '../style/base.scss';
</style>
