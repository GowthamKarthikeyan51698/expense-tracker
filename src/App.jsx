import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'
import Home from './Components/Dashboard/Home'
import { useNavigate, useLocation } from 'react-router-dom'
import CreateExpenses from './Components/Expense/CreateExpenses'
import CreateCompany from './Components/Company/CreateCompany'
import CreateTrip from './Components/Trips/CreateTrip'
import CreateReport from './Components/Reports/CreateReport'
import ListBudget from './Components/Budget/ListBudget'
import CreateBudget from './Components/Budget/CreateBudget'
import Settings from './Components/Settings/Settings'
import ListExpenses from './Components/Expense/ListExpenses'
import ListCompany from './Components/Company/ListCompany'
import ListReports from './Components/Reports/ListReports'
import CreateEmployee from './Components/Employee/CreateEmployee'
import ListEmployee from './Components/Employee/ListEmployee'

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
              <Route path='/create-company' element={<CreateCompany />}></Route>
              <Route path='/create-trip' element={<CreateTrip />}></Route>
              <Route path='/create-report' element={<CreateReport />}></Route>
              <Route path='/create-budget' element={<CreateBudget />}></Route>
              <Route path='/list-budget' element={<ListBudget />}></Route>
              <Route path='/list-expenses' element={<ListExpenses />}></Route>
              <Route path='/list-company' element={<ListCompany />}></Route>
              <Route path='/list-reports' element={<ListReports />}></Route>
              <Route path='/settings' element={<Settings />}></Route>
              <Route path='/create-employee' element={<CreateEmployee />}></Route>
              <Route path='/list-employee' element={<ListEmployee />}></Route>
            </Routes>
          </div>
        </> }
      
    </>
  )
}
