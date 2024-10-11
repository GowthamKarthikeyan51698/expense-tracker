import React from 'react'
import './QuickAccess.css'
import { useNavigate } from 'react-router-dom'

export default function QuickAccess() {
  const navigate = useNavigate();  
  const RedirectPage = () => {
    navigate('/create-expense')
  }

  return (
    <div className='quick-access'>
        <h5 className='text-white fw-600 pb-3 mb-0' style={{borderBottom: '.5px solid #a9a9a9'}}>Quick Access</h5>
        <div className='options d-flex align-items-center flex-wrap pt-3'>
            <button className='option-box' onClick={() => RedirectPage('new-expense')}>
                <div className='quick-access-logos me-1 new-expense'>
                    <img src="/expense-icon.svg" alt="" />
                </div>
                <span>+ New Expense</span>
            </button>
            <button className='option-box' onClick={() => RedirectPage('create-report')}>
                <div className='quick-access-logos me-1 create-report'>
                    <img src="/report-icon.svg" alt="" />
                </div>
                <span>+ Create Report</span>
            </button>
            <button className='option-box' onClick={() => RedirectPage('add-receipts')}>
                <div className='quick-access-logos me-1 add-receipt'>
                    <img src="/receipt-icon.svg" alt="" />
                </div>
                <span>+ Add Receipt</span>
            </button>
            <button className='option-box' onClick={() => RedirectPage('create-trips')}>
                <div className='quick-access-logos me-1 create-trips'>
                    <img src="/trips-icon.svg" alt="" />
                </div>
                <span>+ Create Trips</span>
            </button>
        </div>
    </div>
  )
}
