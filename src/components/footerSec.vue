<template>
  <footer>
    <span>© 2022 codewithsadee. All Rights Reserved</span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(34, 32, 44);
  padding: 20px 0;
  margin-top: 30px;
  span {
    font-weight: 600;
    font-size: 16px;
    color: white;
    letter-spacing: 1.4px;
    text-align: center;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
}
</style>