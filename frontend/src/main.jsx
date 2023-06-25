import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import ArtistsListPage from './pages/ArtistsListPage'
import BuyersListPage from './pages/BuyersListPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ArtistProfile from './pages/ArtistProfile'
import BuyerProfile from './pages/BuyerProfile'
import SuccessPage from './pages/SuccessPage'
import AddService from './pages/AddService'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/artists',
    element: <ArtistsListPage />,
  },
  {
    path: '/buyers',
    element: <BuyersListPage />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignupPage />
  },
  {
    path: '/artist/:idUser',
    element: <ArtistProfile />,
  },
  ,
  {
    path: '/buyer/:idUser',
    element: <BuyerProfile />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
  {
    path: '/add-service/:idUser',
    element: <AddService />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
