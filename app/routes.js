import About from '@/components/About'
import Blog from '@/components/Blog'

const routes = [
  {
    path: '/',
    redirect: '/about',
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/blog',
    name: 'Blog Articles',
    component: Blog,
  },
]

export default routes
