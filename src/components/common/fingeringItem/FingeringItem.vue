<template>
  <div
    class="item"
    :class="{'small-item': curSize, 'large-item': !curSize, 'small-item-bonus': store.isBonusActive}"
    :style="{border: `20px solid ${item.borderColor}`}"
  >
    <img
      :src="item.img"
      :alt="item.name"
      class="img"
      :class="{'large-img': !curSize}"
    />
  </div>
</template>

<script setup lang="ts">
import { FINGERING_ITEM_SIZE } from '@/types/enums';
import type { TFingering } from '@/types/types';
import {useCommonStore} from "@/stores/commonStore";

const props = defineProps<({
    item: TFingering,
    size: FINGERING_ITEM_SIZE,
})>()

const curSize = props.size === FINGERING_ITEM_SIZE.SMALL ? true : false
const store = useCommonStore()
</script>

<style lang="scss">
@import 'fingering-item';
</style>