<template>
  <div class="landing" id="home">
    <div class="container">
      <div class="text">
        <h2>
          new summer <br />
          <span>shoes colection</span>
        </h2>
        <p>
          Competently expedite alternative benefits whereas leading- edge catalysts for change.
          Globally leverage existing an expanded array of leadership.
        </p>
        <button><span>shop now </span><span :class="state.icon">arrow_right_alt</span></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'

const state = useStore().state
</script>

<style lang="scss" scoped>
.landing {
  height: 100vh;
  background-image: url(../assets/imgs/hero-banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: var(--header-height);
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    .text {
      margin-top: -200px;
      @media (max-width: 767px) {
        width: 100%;
        text-align: center;
        button {
          margin: auto;
        }
        h2 {
          font-size: 40px !important;
          line-height: 60px !important;
        }
        p {
          text-align: center !important;
          width: 100% !important;
        }
      }
      h2 {
        font-weight: 700;
        font-size: 70px;
        font-family: 'Courgette', cursive;
        line-height: 100px;
        text-transform: capitalize;
        &::first-letter {
          color: var(--main-color);
          text-decoration: underline;
        }
        span {
          font-family: sans-serif;
        }
      }
      p {
        width: 500px;
        font-weight: 700;
        font-size: 20px;
        color: rgb(110, 110, 110);
        margin-bottom: 50px;
      }
      button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        border-radius: 2px;
        border: none;
        background-color: var(--main-color);
        color: white;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: var(--alt-main-color);
          padding-right: 26px;
          span:nth-child(2) {
            transform: translateX(10px);
          }
        }
        span {
          transition: 0.2s;
          font-weight: 800;
          letter-spacing: 1.3px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
