import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ListCompany() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className='fw-600 text-white'>Companies</h3>
      <div className='overflow-auto'>
          <table className='w-100'>
              <thead>
                  <tr>
                      <th className='text-white'>Company Name</th>
                      <th className='text-white'>Email</th>
                      <th className='text-white'>Currency</th>
                      <th className='text-white'>Industry Type</th>
                      <th className='text-white'>Department</th>
                      <th className='text-white'>Employee Actions</th>
                  </tr>
              </thead>
              <tbody>
                    <tr>
                      <td className='text-white'>
                          Company 1
                      </td>
                      <td className='text-white'>
                          company1@gmail.com
                      </td>
                      <td className='text-white'>
                          $
                      </td>
                      <td className='text-white'>
                          IT & Infrastructure
                      </td>
                      <td className='text-white'>
                          QA, R&D, Operations
                      </td>
                      <td className='text-white'>
                        {/* <button className='btn btn-primary' onClick={() => navigate('/create-employee')}>
                          + Add New Employee
                        </button> */}
                        <i className='fa fa-eye text-white pointer' onClick={() => navigate('/list-employee')}></i>
                        <i className='fa fa-plus-circle text-white ms-2 pointer' onClick={() => navigate('/create-employee')}></i>
                      </td>
                  </tr>
                  <tr>
                      <td className='text-white'>
                          Company 1
                      </td>
                      <td className='text-white'>
                          company1@gmail.com
                      </td>
                      <td className='text-white'>
                          $
                      </td>
                      <td className='text-white'>
                          IT & Infrastructure
                      </td>
                      <td className='text-white'>
                          QA, R&D <span className="text-primary pointer">+2 more</span>
                      </td>
                      <td className='text-white'>
                        {/* <button className='btn btn-primary' onClick={() => navigate('/create-employee')}>
                          + Add New Employee
                        </button> */}
                        <i className='fa fa-eye text-white pointer' onClick={() => navigate('/list-employee')}></i>
                        <i className='fa fa-plus-circle text-white ms-2 pointer' onClick={() => navigate('/create-employee')}></i>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}
