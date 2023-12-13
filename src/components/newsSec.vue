<template>
  <div class="container" id="news">
    <div class="news-section">
      <div class="news1 news">
        <p>adidas shoes</p>
        <span>the summer sale off 50%</span>
        <button>shop now <i class="fa-solid fa-arrow-right arrow"></i></button>
        <img src="../assets/imgs/cta-1.jpg" alt="">
      </div>
      <div class="news2 news">
        <p>nike shoes</p>
        <span>make yourself keep sporty</span>
        <button>shop now <i class="fa-solid fa-arrow-right arrow"></i></button>
        <img src="../assets/imgs/cta-2.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  margin: auto;
  gap: 30px;
  padding: 100px 0;
  gap: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
}
.news {
  width: 612px;
  height: 273px;
  @media (max-width: 767px) {
    width: 90%;
    text-align: center;
    button {
      padding: 0;
      margin: auto;
    }
    span {
      margin: auto;
    }
  }
}
.news1 {
  padding: 50px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
.news1 p {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin: 20px 0;
}
.news1 span {
  height: 82.8px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 30px;
}
.news2 p {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin: 20px 0;
}
.news1 button,
.button {
  width: 114px;
  height: 26px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  background: none;
  border: none;
  font-size: 17px;
  font-family: roboto;
  border-bottom: 1px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.2s;
}
.news2 button {
  width: 114px;
  height: 26px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  background: none;
  border: none;
  font-size: 17px;
  font-family: roboto;
  border-bottom: 1px solid rgb(255, 255, 255);
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
.news2 span {
  width: 287.4px;
  height: 82.8px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  display: flex;
  align-items: center;
  color: white;
  margin-bottom: 30px;
}
button:hover {
  border: none;
}
.news2 {
  padding: 50px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
