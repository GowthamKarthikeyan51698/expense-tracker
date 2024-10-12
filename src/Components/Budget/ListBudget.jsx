import React from 'react'
import './ListBudget.css'
import { useNavigate } from 'react-router-dom'

export default function ListBudget() {
  const navigate = useNavigate();
  const NewBudget = () => {
    navigate('/create-budget')
  }
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='text-white'>Budgets</h4>
        <button className='btn btn-success' onClick={NewBudget}>
          <img src="/budget-icon.svg" className='me-1' width="25" alt="" />
          New Budget
        </button>
      </div>
      <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-2'>
              <div className='budget-box'>
                  <div>fiscal Year: 2024-2025</div> 
                  <div>Budget Amount: $100000</div>
                  <div>Creation Date: 10/10/24</div>
                  <div>Amount Spent: $0</div>
              </div>
          </div>
      </div>
    </>
  )
}
