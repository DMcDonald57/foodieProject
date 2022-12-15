import Vue from 'vue'
import VueRouter from 'vue-router'
import welcomePage from '@/views/welcomePage';
import restReg from '@/views/restReg';
import pageTopper from '@/components/pageTopper'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: welcomePage
  },
  {
    path: "@/components/pageTopper",
    component: pageTopper
  },
  {
    path: "/restReg",
    component: restReg
  }
]

const router = new VueRouter({
  routes
})

export default router
