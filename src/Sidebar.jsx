import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate();
  
  const NavigateToPage = (type) => {
    if(type == 'Home'){
      navigate('/')
    }
  }

  const logout = () => {
    navigate('/login')
  }

  return (
    <>
      <div className="sidebar">
        <div className='logout' onClick={logout} title="Logout">
          <img src="/logout.svg" width="20" className='logout-inactive' alt="" />
          <img src="/logout-active.svg" width="20" className='logout-active' alt="" />
        </div>
        <div>
          <img src="/aiony-haust.jpg" className='avatar-image' alt="avatar" />
          <h5 className='text-white fw-600 text-center mt-2'>Aiony Haust</h5>
        </div>
        <ul className='menus'>
          <li className='text-white' onClick={() => NavigateToPage('Home')}>
            <i className="fa fa-home fs-22 home-hover-active"></i>
            <span className="ms-2 menu-item">Home</span>
          </li>
          <li className='text-white'>
            <img src="/budget-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/budget-icon-active.svg" width="20" className='active-icon' alt="" />
            <span className="ms-2 menu-item">Budget</span> 
          </li>
          <li className='text-white'>
            <img src="/company-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/company-icon-active.svg" width="20" className='active-icon' alt="" />

            <span className="ms-2 menu-item">Company</span>
          </li>
          <li className='text-white'>
            <img src="/expense-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/expense-icon-active.svg" width="20" className='active-icon' alt="" />

            <span className="ms-2 menu-item">Expenses</span>
          </li>
          <li className='text-white'>
            <img src="/report-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/report-icon-active.svg" width="20" className='active-icon' alt="" />

            <span className="ms-2 menu-item">Reports</span>
          </li>
          <li className='text-white'>
            <img src="/approval-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/approval-icon-active.svg" width="20" className='active-icon' alt="" />

            <span className="ms-2 menu-item">Approvals</span>
          </li>
          <li className='text-white'>
            <img src="/settings-icon.svg" width="20" className='inactive-icon' alt="" />
            <img src="/settings-icon-active.svg" width="20" className='active-icon' alt="" />

            <span className="ms-2 menu-item">Settings</span>
          </li>
        </ul>
        <h6 className='app-title-footer'>
            <img src="/money.png" className='me-2' width="25" alt="" />
            GK Expense Tracker
        </h6>
      </div>
    </>
  )
}
