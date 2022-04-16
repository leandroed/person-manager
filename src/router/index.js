import Vue from 'vue'
import Router from 'vue-router'
import ErrorPage404 from '../views/ErrorPage404'
import PersonHome from '../views/PersonHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PersonHome',
      component: PersonHome
    },
    { path: '*', name: 'ErrorPage404', component: ErrorPage404 }
  ]
})
