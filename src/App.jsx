import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'


const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
      path: '/',
      element: <HomePage />,
      },
            {
      path: '/about',
      element: <AboutPage />,
      },
            {
      path: '/articles',
      element: <ArticleListPage />,
      },
                  {
      path: '/articles/:name',
      element: <ArticlePage />,
      },
   ]
  }
]

const router = createBrowserRouter(routes)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
