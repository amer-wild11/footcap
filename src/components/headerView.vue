<template>
  <header>
    <div class="container">
      <div class="logo">
        <a href="#home">
          <h1>footcap</h1>
        </a>
      </div>
      <ul class="links">
        <li v-for="link in links" :key="link">
          <a :href="link.path">
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
      <ul :class="['mobile-links', showMenu ? 'show' : '']">
        <li v-for="link in links" :key="link">
          <a :href="link.path">
            <span :class="[state.icon, 'icon']">{{ link.iconName }}</span>
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
      <div class="features">
        <span :class="[state.icon, 'feat', feat.class]" v-for="feat in features" :key="feat"
          >{{ feat.iconName }}
          <span class="before"></span>
        </span>
        <div :class="['burgerMenu', showMenu ? 'show' : '']" @click="showMenu = !showMenu">
          <span class="start line"></span>
          <span class="mid line"></span>
          <span class="end line"></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const state = useStore().state

const showMenu = ref(state.header.showMenu)
const links = state.header.links
const features = state.header.features

document.addEventListener('click', (e) => {
  if(!document.querySelector('.burgerMenu').contains(e.target) && !document.querySelector('.mobile-links').contains(e.target)) {
    showMenu.value = false
  }
})

</script>

<style scoped lang="scss">
header {
  height: var(--header-height);
  padding: 0 20px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 100;
  background: white;
  box-shadow: 0 0 4px 0 lightgray;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  }
  .logo {
    a {
      color: black;
    }
    h1 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 23px;
      &::first-letter {
        color: var(--main-color);
        font-size: 30px;
        line-height: 1;
      }
    }
  }
  .links {
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 767px) {
      display: none;
    }
    li {
      border-radius: 3px;
      &:hover {
        a {
          span {
            color: var(--main-color);
          }
        }
      }
      a {
        padding: 5px;
        color: black;
        text-transform: capitalize;
        span {
          transition: 0.2s;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
  .features {
    display: flex;
    align-items: center;
    gap: 5px;
    border-left: 1px solid lightgray;
    padding: 0 5px;
    .before {
      width: 0%;
      height: 100%;
      background-color: var(--main-color);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: 0.2s ease;
    }
    .feat {
      position: relative;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 20px;
      transition: 0.2s;
      transition-delay: 0.1s;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        color: white;
        .before {
          width: 100%;
        }
      }
    }
    .burgerMenu {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.2s ease;
      gap: 4px;
      @media (min-width: 767px) {
        display: none;
      }
      &:hover {
        .line {
          opacity: 1;
          transition: 0.2s;
        }
      }
      &.show {
        .line {
          &.start {
            transform: translateY(6px) translateX(0) rotate(-45deg);
          }
          &.mid {
            opacity: 0;
            transform: translateX(-20px) translateY(0px);
          }
          &.end {
            transform: translateY(-7px) rotate(45deg);
          }
        }
      }
      .line {
        width: 60%;
        height: 3px;
        display: inline-block;
        background: black;
        margin: 0;
        padding: 0;
        transition: 0.2s;
        &.mid {
          transition: 0.3s;
        }
      }
    }
  }
  .mobile-links {
    width: 150px;
    height: 100vh;
    background: rgb(255, 255, 255);
    position: absolute;
    top: var(--header-height);
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 5px;
    transition: 0.2s ease;
    transform: translateX(100%);
    border: none;
    @media (min-width: 767px) {
      display: none;
    }
    &.show {
      transform: translate(0);
      border: 1px solid lightgray;
    }
    li {
      padding: 10px;
      scale: 0.9;
      width: 100%;
      transition: 0.2s;
      &:hover {
        scale: 1.1;
        a {
          color: black;
        }
      }
      a {
        color: rgb(110, 110, 110);
        display: flex;
        align-items: center;
        gap: 5px;
        span.icon {
          font-size: 20px;
        }
        span {
          font-weight: 600;
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
