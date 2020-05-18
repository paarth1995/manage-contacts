import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AddContact from '@/components/AddContact'
import EditContact from '@/components/EditContact'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/edit/:index',
      name: 'EditContact',
      component: EditContact,
      props: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
