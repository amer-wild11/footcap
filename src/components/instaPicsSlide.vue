<template>
  <div class="slide">
    <div class="img">
      <img src="../assets/imgs/insta-1.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-2.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-3.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-4.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-5.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-6.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-7.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
    <div class="img">
      <img src="../assets/imgs/insta-8.jpg" alt="" />
      <span class="title">follow us</span>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.slide {
  padding-top: 49px;
  display: flex;
  align-items: center;
  overflow: auto;
  .img {
    position: relative;
    min-width: 230px;
    overflow: hidden;
    user-select: none;
    &:hover {
      .title {
        top: 50%;
      }
      img {
        filter: blur(4px);
      }
    }
    .title {
      text-transform: capitalize;
      font-weight: 900;
      font-size: 20px;
      color: white;
      position: absolute;
      top: -50%;
      left: 50%;
      transform: translate(-50%, -50%);
      letter-spacing: 1.4px;
      text-shadow: 0 0 10px black;
      z-index: 0;
      transition: 0.2s ease;
    }
  }
  img {
    width: 250px;
    z-index: -1;
  }
}
</style>
