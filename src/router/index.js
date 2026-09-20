import { createRouter, createWebHashHistory } from 'vue-router'
import JobDetail from '../components/JobDetail.vue'
import JobOverview from '../components/JobOverview.vue'

const routes = [
  { path: '/', name: 'overview', component: JobOverview },
  { path: '/jobs/:id', name: 'job-detail', component: JobDetail, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
