<template>
  <div class="wrapper">
    <img
        v-if="!store.isBonusActive"
        src="../../../assets/bg-triangle.svg"
        class="background"
    />
    <img
        v-else
        src="../../../assets/bg-pentagon.svg"
        class="background"
    />
    <ul :class="{'advantages-circle': !store.isBonusActive, 'advantages-circle__bonus': store.isBonusActive}">
      <li v-for="item in fingeringList"
          :key="item.id"
          >
        <FingeringItem
            :item="item"
            :size="FINGERING_ITEM_SIZE.SMALL"
            class="advantages-circle__element"
            @click="store.defineCurrentFingering(item.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores/commonStore';
import FingeringItem from '@/components/common/fingeringItem/FingeringItem.vue'
import {defaultGameList} from '@/entities/defaultGame'
import { FINGERING_ITEM_SIZE } from '@/types/enums';
import {bonusGameList} from "@/entities/bonusGame";
import {computed,} from "vue";

const store = useCommonStore()
const fingeringList = computed(() => store.isBonusActive ? bonusGameList : defaultGameList)
</script>

<style lang="scss">
@import 'select';
</style>
