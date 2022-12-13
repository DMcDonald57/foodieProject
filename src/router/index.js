import Vue from 'vue'
import VueRouter from 'vue-router'
import welcomePage from '@/views/welcomePage'
import restaurantRegistration from '@/views/restaurantRegistration'
// import pageTopper from '@/components/pageTopper'

Vue.use(VueRouter)

const routes = [
  {
  path: "@/views/welcomePage",
  component: welcomePage
  },
  // {path: "@/components/pageTopper",
    // component: pageTopper
// }
{
  path: "@/views/restaurantRegistration",
  component: restaurantRegistration
}
]

const router = new VueRouter({
  routes
})

export default router
