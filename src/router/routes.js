// single pages
import HomePage from '../pages/Home.vue'
import NotFoundPage from '../pages/NotFound.vue'
import UploadVideo from '../components/videos/upload.vue'
import WatchVideo from '../components/videos/watch.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: HomePage,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },

  {
    path: '/upload',
    name: 'upload',
    component: UploadVideo,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/watch/:id',
    name: 'watch',
    component: WatchVideo,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },

]
