<template>
  <div class="services">
    <div class="container">
      <div class="serv">
        <span :class="['icon', state.icon]">local_shipping</span>
        <div class="text">
          <span class="servTitle">FREE SHIPING</span>
          <span class="servDisc">All Orders Off <span class="price">$150</span></span>
        </div>
      </div>
      <div class="serv">
        <span :class="['icon', state.icon]">credit_card</span>
        <div class="text">
          <span class="servTitle">QUICK PAYMENT</span>
          <span class="servDisc"><span class="price">100%</span> Secure Payment</span>
        </div>
      </div>
      <div class="serv">
        <span :class="['icon', state.icon]">package_2</span>
        <div class="text">
          <span class="servTitle">FREE RETURNS</span>
          <span class="servDisc">Money Back In <span class="price">30</span> Days</span>
        </div>
      </div>
      <div class="serv">
        <span :class="['icon', state.icon]">chat</span>
        <div class="text">
          <span class="servTitle"> 24/7 SUPPORT</span>
          <span class="servDisc">Get Quick Support</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const state = useStore().state
</script>

<style lang="scss" scoped>
.services {
  padding: 50px 0;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 107px;
  .serv {
    display: flex;
    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    gap: 10px;
    .icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: white;
      background: var(--main-color);
      font-size: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-weight: 700;
      }
      .servDisc {
        font-weight: 600;
        font-size: 16px;
        color: rgb(130, 129, 129);
        .price {
          color: var(--main-color);
        }
      }
    }
  }
}
</style>
