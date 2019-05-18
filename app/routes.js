import HomeApp from '@/components/HomeApp'
import PageApp from '@/components/PageApp'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeApp,
  },
  {
    path: '/page',
    name: 'Page',
    component: PageApp,
  },
]

export default routes
