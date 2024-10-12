import React from 'react'
import './RecentExpenses.css'

export default function RecentExpenses() {
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
      </div>
    </div>
  )
}
