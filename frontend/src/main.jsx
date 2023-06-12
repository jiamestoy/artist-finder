import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import ArtistsListPage from './pages/ArtistsListPage'
import BuyersListPage from './pages/BuyersListPage'
import LoginPage from './pages/LoginPage'
import ArtistProfile from './pages/ArtistProfile'

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
    path: '/user/:idUser',
    element: <ArtistProfile />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
