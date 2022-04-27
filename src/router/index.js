import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/RegView.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { auth } from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter(to,from,next){
      let user = auth.currentUser;
      if(!user){
        next()
      }else{
        next({name:"ChatRoom"})
      }
    }
  },
  {
    path: '/ChatRoom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter(to,from,next){
      let user = auth.currentUser;
      if(user){
        next()
      }else{
        next({name:"Welcome"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
