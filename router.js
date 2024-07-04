import { createRouter, createWebHistory } from 'vue-router'
import DispositivosPage from '~/pages/dispositivos.vue'
import ContenedorDetalle from '~/pages/ContenedorDetalle.vue'

const routes = [
  {
    path: '/',
    redirect: '/dispositivos'
  },
  {
    path: '/dispositivos',
    component: DispositivosPage
  },
  {
    path: '/contenedordetalle/:id/:nombre',
    name: 'ContenedorDetalle',
    component: ContenedorDetalle
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
