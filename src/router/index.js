import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('../view/login.vue')
const Home = () => import('../view/home.vue')
const Herder = () => import('../components/herder.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },{
      path:'/home',
      component:Home,
      children:[
        {
          path:'home/list',
          component:Herder
        }
      ]
    }
  ]
})
