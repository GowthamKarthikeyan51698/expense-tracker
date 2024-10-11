import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'
import Home from './Components/Dashboard/Home'
import { useNavigate, useLocation } from 'react-router-dom'
import CreateExpenses from './Components/Expense/CreateExpenses'

export default function App() {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <>
    {/*Refer UX: https://app.uizard.io/templates/PjXBoyAKjWFnZZK7AnA5/fullscreen */}
    { location.pathname == '/login' ? 
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      : 
        <>
          <div className='main-app-content'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/create-expense' element={<CreateExpenses />}></Route>
            </Routes>
          </div>
        </> }
      
    </>
  )
}
