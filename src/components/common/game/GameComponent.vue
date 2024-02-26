<template>
    <div class="game">
      <div class="fingering-block">
        <span class="title">вы выбрали</span>
        <FingeringItem
            :item="selectItem"
            :size="FINGERING_ITEM_SIZE.LARGE"
            class="rotate"
            :class="{'shadow': userWin}"
        />
      </div>
      <ResultGame :result="result" />
      <div class="fingering-block">
        <span class="title">компьютер выбрал</span>
        <FingeringItem
            :item="compItem"
            :size="FINGERING_ITEM_SIZE.LARGE"
            class="rotate"
            :class="{'shadow': compWin}"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import {useCommonStore} from '@/stores/commonStore'
import {defaultGameList,} from '@/entities/defaultGame'
import {FINGERING_ITEM_SIZE, RESULT} from '@/types/enums'
import FingeringItem from '@/components/common/fingeringItem/FingeringItem.vue'
import {computed, ref} from "vue";
import ResultGame from "@/components/common/ResultGame/ResultGame.vue";
import {bonusGameList} from "@/entities/bonusGame";

const store = useCommonStore()
const fingeringList = computed(() => store.isBonusActive ? bonusGameList : defaultGameList)
const selectItem = fingeringList.value.find(item => item.id === store.currentFingering)
const randomIndex = Math.floor(Math.random() * defaultGameList.length)
const compItem = fingeringList.value[randomIndex]
const result =  computed(() => compItem.id === selectItem.id ? RESULT.DRAW : defineVictory())
const userWin = ref(false)
const compWin = ref(false)

const defineVictory = () =>{
  if (!compItem.weaker.includes(selectItem.id)) {
    userWin.value = true
    store.increment()
    return RESULT.WINNINGS
  } else {
    compWin.value = true
    store.dicrement()
    return RESULT.LOSS
  }
}
</script>

<style lang="scss">
@import 'game';
</style>