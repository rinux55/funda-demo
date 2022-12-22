import { createRouter, createWebHistory } from "vue-router"
import FundaDemo from "../pages/funda-demo.vue"

// @todo I'd dynamically import the components when there would be more pages
// one could argue the router is completel
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: FundaDemo,
    },
  ],
})

export default router
