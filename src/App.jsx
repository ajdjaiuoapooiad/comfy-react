import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {About,Cart,Checkout,Error,HomeLayout,Landing,Login,Order,Products,Register,SingleProduct} from './pages'




// loaders
import { loader as landingLoader } from './pages/Landing';
import ErrorElement from './components/ErrorElement';
// actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: ErrorElement,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'orders',
        element: <Order />,
      },
      
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;