<template>
  <div class="products" id="productsSection">
    <div class="container">
      <div class="header">
        <h3>Bestsellers Products</h3>
      </div>
      <ul class="categories">
        <li class="active">all</li>
        <li>nike</li>
        <li>Adidas</li>
        <li>puma</li>
        <li>bata</li>
        <li>apex</li>
      </ul>
      <div class="products-container">
        <div class="product" v-for="product in products" :key="product">
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
</template>

<script setup>
import { useStore } from 'vuex'
const state = useStore().state

const products = 8
</script>

<style lang="scss" scoped>
.products {
  @media (max-width: 767px) {
    padding: 30px;
  }
}
.container {
  padding: 20px 0;
  .header {
    font-size: 25px;
    text-align: center;
    margin-bottom: 50px;
    h3 {
      font-weight: 700;
    }
  }
  ul.categories {
    width: 60%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    li {
      min-width: 40px;
      min-height: 30px;
      padding: 4px 7px;
      border-radius: 8px;
      border: 1px solid lightgray;
      font-weight: 600;
      text-transform: capitalize;
      cursor: pointer;
      user-select: none;
      &.active {
        background-color: var(--main-color);
        color: white;
      }
    }
  }
  .products-container {
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
}
</style>
