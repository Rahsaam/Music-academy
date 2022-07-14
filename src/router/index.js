import { createRouter, createWebHistory } from 'vue-router'
import store     from '../store'
import Home      from '../views/Home.vue'
import Sentbox   from '../views/Sentbox.vue'
import Profile   from '../views/Profile.vue'
import Login     from '../views/Login.vue'
import Logout    from '../views/Logout.vue'
import Register  from '../views/Register.vue'
import Edit      from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sentbox',
    name: 'Sentbox',
    component: Sentbox,
    meta: { loginRequired: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
     meta: { loginRequired: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { loginRedirect: true } 
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { loginRedirect: true } 
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
     meta: { loginRequired: true }  
  },
  {
    path: '/sentbox/:id',
    name: 'Edit',
    component: Edit, 
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequiered)) {
    if (store.state.isAuthenticated) {
      next( )
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRedirect)) {
    if (!store.state.isAuthenticated) {
      next( )
    } else {
      next('/profile')
    }
  } else {
    next()
  }
})
export default router
