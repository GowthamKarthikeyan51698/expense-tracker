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
import ViewTrips from './Components/Trips/ViewTrips'
import ListTrips from './Components/Trips/ListTrips'

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

              <Route path='/company/create-company' element={<CreateCompany />}></Route>
              <Route path='/company/list-company' element={<ListCompany />}></Route>

              <Route path='/report/create-report' element={<CreateReport />}></Route>
              <Route path='/report/list-reports' element={<ListReports />}></Route>

              <Route path='/budget/create-budget' element={<CreateBudget />}></Route>
              <Route path='/budget/list-budget' element={<ListBudget />}></Route>
              
              <Route path='/expense/create-expense' element={<CreateExpenses />}></Route>
              <Route path='/expense/list-expenses' element={<ListExpenses />}></Route>

              <Route path='/employee/create-employee' element={<CreateEmployee />}></Route>
              <Route path='/employee/list-employee' element={<ListEmployee />}></Route>

              <Route path='/trip/create-trip' element={<CreateTrip />}></Route>
              <Route path='/trip/view-trip' element={<ViewTrips />}></Route>
              <Route path='/trip/list-trips' element={<ListTrips />}></Route>

              <Route path='/settings' element={<Settings />}></Route>
            </Routes>
          </div>
        </> }
      
    </>
  )
}
