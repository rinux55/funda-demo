import { createRouter, createWebHistory } from "vue-router"
import FundaDemo from "../pages/funda-demo.vue"

// Normally i'd use dynamically imported components with a loading state and everything
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
