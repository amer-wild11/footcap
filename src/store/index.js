import { createStore } from "vuex";
import header from './header/header.js'

export default createStore({
  state: {
    icon: 'material-symbols-outlined'
  },
  modules: {
    header
  }
})