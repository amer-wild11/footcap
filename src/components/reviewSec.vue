<template>
  <div class="review" id="review">
    <div class="container" ref="container">
      <div class="banner" ref="banner">
        <h3 class="title">New Trend Edition</h3>
        <button><span>explore all</span> <span :class="state.icon">arrow_right_alt</span></button>
        <img src="../assets/imgs/special-banner.jpg" alt="" />
      </div>
      <div class="reviewProducts">
        <div class="header">
          <h4 class="title">Nike Special</h4>
          <div class="line"></div>
        </div>
        <div class="products" ref="products">
          <div class="product" v-for="product in 7" :key="product">
            <ul :class="['features']">
              <li>
                <span :class="state.icon">shopping_cart</span>
              </li>
              <li>
                <span :class="state.icon">favorite</span>
              </li>
              <li>
                <span :class="state.icon">visibility</span>
              </li>
              <li>
                <span :class="state.icon">autorenew</span>
              </li>
            </ul>
            <img src="../assets/imgs/product-1.jpg" alt="" />
            <div class="categ">
              <span>man / women</span>
            </div>
            <div class="title">
              <span>aire jordan 7 retro</span>
            </div>
            <div class="price">
              <span>$100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const state = useStore().state

const containerWidth = ref('')
const banner = ref('')
const bannerWidth = ref('')
const container = ref('')
const products = ref('')

window.onresize = () => {
  containerWidth.value = container.value.offsetWidth
  bannerWidth.value = banner.value.offsetWidth
  products.value.style.width = `${containerWidth.value - bannerWidth.value}px`
}

onMounted(() => {
  containerWidth.value = container.value.offsetWidth
  bannerWidth.value = banner.value.offsetWidth
  products.value.style.width = `${containerWidth.value - bannerWidth.value}px`
})

</script>

<style lang="scss" scoped>
.container {
  margin: 50px auto;
  display: flex;
  gap: 40px;
  min-height: 521px;
  @media (max-width: 767px) {
    flex-direction: column;
    .banner {
      height: 521px !important;
    }
    .header {
      padding: 0 10px;
    }
  }
  .banner {
    min-width: 312px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px 0;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .title {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 10px;
    border: 1px solid white;
    background: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      border-color: transparent;
    }
    span {
      color: white;
      text-transform: capitalize;
    }
  }
  .reviewProducts {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    .product {
      border: 1px solid rgb(205, 205, 205);
      .title {
        color: black;
      }
    }
    .products {
      max-width: 950px;
      min-width: 100%;
      overflow: auto;
      display: flex;
      align-items: center;
      gap: 20px;
      padding-bottom: 10px;
      @media (max-width: 767px) {
        padding: 0 10px;
        padding-bottom: 10px;
      }
      &::-webkit-scrollbar-track {
        border: 1px solid var(--main-color);
        border-radius: 30px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--alt-main-color);
      }
      .product {
        overflow: hidden;
        min-width: 300px;
        width: 250px;
        gap: 0;
        height: fit-content;
        @media (max-width: 767px) {
          min-width: 190px !important;
        }
      }
    }
    .header {
      padding-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
      .title {
        margin: 0;
        padding: 0;
        color: black;
        font-weight: 600;
        font-size: 26px;
      }
      .line {
        flex: 1;
        height: 2px;
        background: rgb(141, 140, 140);
        margin-top: 5px;
      }
    }
  }
}
</style>
