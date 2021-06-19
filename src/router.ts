import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import Board from './views/GameBoard.vue'
import Characters from './views/Characters.vue'

export const Paths = {
    top: '/',
    board: '/board',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: Paths.top,
        name: 'Characters',
        component: Characters  
    },
    {
      path: Paths.board,
      name: 'Board',
      component: Board
    }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router