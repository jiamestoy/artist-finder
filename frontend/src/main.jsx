import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import SearchArtistsAndServicesPage from './pages/SearchArtistsAndServicesPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ArtistProfile from './pages/ArtistProfile'
import BuyerProfile from './pages/BuyerProfile'
import SuccessPage from './pages/SuccessPage'
import SuccessServicePage from './pages/SuccessServicePage'
import AddService from './pages/AddService'
import RoutePrivate from './components/RoutePrivate'
import Error404Page from './pages/Error404Page'

import {createBrowserRouter, Route, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error404Page />,
    element: <App />,
  },
  {
    path: '/search',
    element: <SearchArtistsAndServicesPage />,
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
    element: <RoutePrivate><SuccessPage /></RoutePrivate>,
  },
  {
    path: '/success-service',
    element: <RoutePrivate><SuccessServicePage /></RoutePrivate>,
  },
  {
    path: '/add-service/:idUser',
    element: <RoutePrivate><AddService /></RoutePrivate>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
