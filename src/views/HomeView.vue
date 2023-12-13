<script setup>
import landingSec from '@/components/landingSec.vue'
import aboutSec from '@/components/aboutSec.vue'
import productsSec from '@/components/productsSec.vue'
import newsSec from '@/components/newsSec.vue'
import reviewSec from '@/components/reviewSec.vue'
import serviecsSec from '@/components/serviecsSec.vue'
import instaPicsSlide from '@/components/instaPicsSlide.vue'
import footerSec from '@/components/footerSec.vue'
</script>

<template>
  <main>
    <landingSec />
    <aboutSec />
    <productsSec />
    <newsSec />
    <reviewSec />
    <serviecsSec />
    <instaPicsSlide />
    <footerSec />
  </main>
</template>

<style lang="scss">
.product {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 5px;
  padding-bottom: 10px;
  box-shadow: 0 0 3px 0 rgb(160, 160, 160);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    img {
      scale: 1.05;
    }
    .features {
      right: 10px;
    }
  }
  img {
    transition: 0.2s;
    width: 100%;
    z-index: -1;
  }
  .categ {
    margin: 10px 0;
    span {
      font-weight: 600;
      letter-spacing: 1.3px;
      text-transform: capitalize;
      font-size: 15px;
      color: rgb(107, 107, 107);
    }
  }
  .title {
    text-align: center;
    font-size: 20px;
    text-transform: capitalize;
    span {
      font-weight: 700;
    }
  }
  .price {
    span {
      font-weight: 700;
      letter-spacing: 1.3px;
      color: var(--main-color);
    }
  }
  .features {
    position: absolute;
    top: 20px;
    right: -100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: 0.2s;
    li {
      span {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        box-shadow: 0 0 4px rgb(105, 105, 105);
        transition: 0.2s;
        user-select: none;
        &:hover {
          background: var(--main-color);
          color: white;
        }
      }
    }
  }
}
</style>
