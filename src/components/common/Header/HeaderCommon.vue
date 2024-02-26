<template>
  <header class="header">
    <div class="score">
      <div class="title-wrapper">
        <h3>
          rock paper scissors
        </h3>
      </div>
      <div class="current-score-block">
        <span class="title">счет</span>
        <span class="currnet-scoore">
          {{ store.currentScore }}
        </span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useCommonStore } from '@/stores/commonStore'

const store = useCommonStore()
</script>

<style lang="scss">
@import './header-common.scss';
</style>@/stores/commonStore