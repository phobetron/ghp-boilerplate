import RouteOneApp from '@/components/RouteOneApp'
import RouteTwoApp from '@/components/RouteTwoApp'

const routes = [
  {
    path: '/',
    name: 'About',
    component: RouteOneApp,
  },
  {
    path: '/blog',
    name: 'Blog Articles',
    component: RouteTwoApp,
  },
]

export default routes
