<template>
  <div class="about">
    <div class="container">
      <div class="colection" v-for="colection in colections" :key="colection">
        <img src="../assets/imgs/collection-1.jpg" alt="" />
        <span class="title">men colections</span>
        <button><span>explore all</span> <span :class="state.icon">arrow_right_alt</span></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const colections = 3

const state = useStore().state
</script>

<style scoped lang="scss">
.container {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  @media (max-width: 767px) {
    justify-content: center;
  }
  .colection {
    min-width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    position: relative;
    border: 1px solid rgb(101, 101, 101);
    @media (max-width: 767px) {
      min-width: 300px;
      height: 300px;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      text-transform: capitalize;
    }
    button {
      padding: 4px 10px;
      display: flex;
      align-items: center;
      gap: 10px;
      text-transform: capitalize;
      border: none;
      background-color: transparent;
      border: 1px solid;
      cursor: pointer;
      span:first-child {
        font-weight: 700;
      }
    }
  }
}
</style>
