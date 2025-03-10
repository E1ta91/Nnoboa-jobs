
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import ResultsPage from './pages/resultsPage'
import Login from './pages/login'
import Signup from './pages/signup'
import ESignup from './pages/eSignup'

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },
    {
      path: 'results',
      element: <ResultsPage />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <Signup />
    },
    {
      path: 'esignup',
      element: <ESignup />
    },

   
 ] )



  return (
    <RouterProvider router={router} />
    

  )
}

export default App
