import React, { useEffect } from 'react'
import './RecentExpenses.css'

export default function RecentExpenses() {
  useEffect(() => {
    let circle_progress = document.getElementById("circle-progress")
    circle_progress.style.setProperty("--dash", '550px')
  }, [])
  return (
    <div>
      <div className='recent-expenses-section'>
        <div className='mt-3 pending-tasks'>
          <h5 className='text-white fw-600 pb-2 mb-2 mb-0' style={{borderBottom: '.5px solid #a9a9a9'}}>Pending Tasks</h5>
          <table className='w-100'>
            <tbody>
              <tr>
                <td className='width-50px'><img src="/expense-icon-active.svg" width='30' alt="" /></td>
                <td className='text-white'>Pending Approvals</td>
                <td className='text-white'>5</td>
              </tr>
              <tr>
                <td className='width-50px'><img src="/expense-icon-active.svg" width='30' alt="" /></td>
                <td className='text-white'>Pending Approvals</td>
                <td className='text-white'>5</td>
              </tr>
              <tr>
                <td className='width-50px'><img src="/expense-icon-active.svg" width='30' alt="" /></td>
                <td className='text-white'>Pending Approvals</td>
                <td className='text-white'>5</td>
              </tr>
              <tr>  
                <td className='width-50px'><img src="/expense-icon-active.svg" width='30' alt="" /></td>
                <td className='text-white'>Pending Approvals</td>
                <td className='text-white'>5</td>
              </tr>
              <tr>
                <td className='width-50px'><img src="/expense-icon-active.svg" width='30' alt="" /></td>
                <td className='text-white'>Pending Approvals</td>
                <td className='text-white'>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-3 recent-expenses'>
          <h5 className='text-white fw-600 pb-2 mb-2 mb-0' style={{borderBottom: '.5px solid #a9a9a9'}}>Recent Expenses</h5>
          <div className='overflow-auto'>
            <table className='w-100'>
                <thead>
                    <tr>
                        <th className='text-white'>Subject</th>
                        <th className='text-white'>Employee</th>
                        <th className='text-white'>Team</th>
                        <th className='text-white'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-white'>Office Supplies</td>
                        <td className='text-white'>John Smith</td>
                        <td className='text-white'>Marketing</td>
                        <td className='text-white'>$150.00</td>
                    </tr>
                    <tr>
                        <td className='text-white'>Office Supplies</td>
                        <td className='text-white'>John Smith</td>
                        <td className='text-white'>Marketing</td>
                        <td className='text-white'>$150.00</td>
                    </tr>
                    <tr>
                        <td className='text-white'>Office Supplies</td>
                        <td className='text-white'>John Smith</td>
                        <td className='text-white'>Marketing</td>
                        <td className='text-white'>$150.00</td>
                    </tr>
                    <tr>
                        <td className='text-white'>Office Supplies</td>
                        <td className='text-white'>John Smith</td>
                        <td className='text-white'>Marketing</td>
                        <td className='text-white'>$150.00</td>
                    </tr>
                    <tr>
                        <td className='text-white'>Office Supplies</td>
                        <td className='text-white'>John Smith</td>
                        <td className='text-white'>Marketing</td>
                        <td className='text-white'>$150.00</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className='recent-expenses mt-3-sm-custom'>
          <div className='d-flex align-items-center justify-center-sm justify-content-between flex-wrap'>
            <div className='position-relative'>
              <svg width="200" height="200" viewBox="0 0 250 250" id="circle-progress" className="circular-progress">
                <circle className="bg"></circle>
                <circle className="fg"></circle>
              </svg>
              <div className='text-white progress-percent'>90%</div>
            </div>
            <div className='px-2 pt-2'>
              <h6 className='text-white text-center'>Total Budget</h6>
              <div className='text-white text-center'>1,00,000</div>
              <h6 className='text-white text-center mt-2'>Amount Spent</h6>
              <div className='text-white text-center'>10,000</div>
              <h6 className='text-white text-center mt-2'>Remaining Amount</h6>
              <div className='text-white text-center'>90,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
