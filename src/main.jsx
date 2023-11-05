import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Account from './Components/Account/Account.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Contact from './Components/Contact/Contact.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.jsx'
import TermsAndConditions from './Components/Terms&Condition/Terms&condition.jsx'
import AccountPage from './Components/Account/Account.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes.jsx'

const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
      <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
      <Route path='Terms&Condition' element={<TermsAndConditions />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} />

      <Route element={<PrivateRoutes />}>
        <Route path='Account' element={<AccountPage />} />
      </Route>



      <Route path='*' element={<div>Not Found</div>} />
    </Route>

  )

)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
