import React from 'react'

export default function ListEmployee() {
  return (
    <>
      <h3 className='fw-600 text-white'>Employee List</h3>
      <div className='overflow-auto'>
          <table className='w-100'>
              <thead>
                  <tr>
                      <th className='text-white'>Employee Name</th>
                      <th className='text-white'>Allocated Amount</th>
                      <th className='text-white'>Amount Spent</th>
                      <th className='text-white'>Remaining Amount</th>
                      <th className='text-white'>Gender</th>
                      <th className='text-white'>Company Email</th>
                      <th className='text-white'>Department</th>
                      <th className='text-white'>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className='text-white'>
                          Employee 1
                      </td>
                      <td className='text-white'>
                          100000
                      </td>
                      <td className='text-white'>
                          20000
                      </td>
                      <td className='text-white'>
                          80000
                      </td>
                      <td className='text-white'>
                          Male
                      </td>
                      <td className='text-white'>
                        employee1@gmail.com
                      </td>
                      <td className='text-white'>
                        Quality Assurance
                      </td>
                      <td className='text-white'>
                        <img src="fund_allocation.svg" width="20" alt="" onClick={() => navigate('/list-employee')} />
                        <i className='fa fa-pencil text-white ms-2 pointer' onClick={() => navigate('/create-employee')}></i>
                      </td>
                  </tr>
                  <tr>
                  <td className='text-white'>
                          Employee 2
                      </td>
                      <td className='text-white'>
                          100000
                      </td>
                      <td className='text-white'>
                          20000
                      </td>
                      <td className='text-white'>
                          80000
                      </td>
                      <td className='text-white'>
                          Male
                      </td>
                      <td className='text-white'>
                        employee1@gmail.com
                      </td>
                      <td className='text-white'>
                        Quality Assurance
                      </td>
                      <td className='text-white'>
                        <img src="fund_allocation.svg" width="20" alt="" onClick={() => navigate('/list-employee')} />
                        <i className='fa fa-pencil text-white ms-2 pointer' onClick={() => navigate('/create-employee')}></i>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}
