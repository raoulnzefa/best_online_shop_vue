import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Good from '../views/Good.vue'
import Category from '../views/Category.vue'

const routes = [
  {
    path: '/:page?',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/good/:name',
    name: 'good',
    component: Good,
    props: true
  },
  {
    path: '/category/:name',
    name: 'category',
    component: Category,
    props: true
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
