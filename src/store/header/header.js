import { createStore } from 'vuex'

export default createStore({
  state: {
    showMenu: false,
    links: [
      {
        name: 'home',
        path: '#home',
        class: 'home',
        iconName: 'home'
      },
      {
        name: 'about',
        path: '#aboutSection',
        class: 'about',
        iconName: 'info'
      },
      {
        name: 'products',
        path: '#productsSection',
        calss: 'products',
        iconName: 'inventory'
      },
      {
        name: 'news',
        path: '#news',
        class: 'news',
        iconName: 'brand_awareness'
      },
      {
        name: 'review',
        path: '#review',
        class: 'review',
        iconName: 'rate_review'
      },
      {
        name: 'contact',
        path: '#contactSection',
        class: 'contact',
        iconName: 'contact_phone'
      }
    ],
    features: [
      {
        iconName: 'search',
        class: 'search'
      },
      {
        iconName: 'person',
        class: 'profile'
      },
      {
        iconName: 'favorite',
        class: 'fav'
      },
      {
        iconName: 'shopping_bag',
        class: 'shoppingBag'
      }
    ]
  }
})
