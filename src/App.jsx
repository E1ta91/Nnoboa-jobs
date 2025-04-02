import './App.css'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import ESignup from './pages/eSignup'
import User from './pages/User'
import UserDashboard from './subPages/userDashboard'
import EmployerDashboard from './employerDashboard/employerDashboard'
import HireSkill from './employerDashboard/hireSkill'
import ResultsPage from './pages/resultsPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserPage from './employerDashboard/userPage'
import JobPage from './employerDashboard/jobPage'
import Report from './components/report'
import ConsultSignUp from './pages/consultSignUp'
import ConsultProfile from './pages/consultProfile'


function App() {

  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/esignup',
      element: <ESignup/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/jobs',
      element: <ResultsPage/>
    },
    {
      path: '/login/onboarding',
      element: <User/>
    },
    {
      path: '/employerDashboard',
      element: <EmployerDashboard/>
    },
    {
      path: '/userDashboard',
      element: <UserDashboard/>
    },
    {
      path: '/hire',
      element: <HireSkill/>
    },
    {
      path: '/user',
      element: <UserPage/>
    },
    {
      path: '/job-information',
      element: <JobPage/>
    },
    {
      path: '/report',
      element: <Report/>
    },
    {
      path: '/consultsignup',
      element: <ConsultSignUp/>
    },
   
    {
      path: '/consultprofile',
      element: <ConsultProfile/>
    },
   
  ])



  return (
    <RouterProvider router={router} />
  
  )
 
}


  
export default App
