import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ListTrips() {
  const navigate = useNavigate();
  return (
    <>
      <h3 className='fw-600 text-white'>Trips</h3>
      <div className='overflow-auto'>
          <table className='w-100'>
              <thead>
                  <tr>
                      <th className='width-50px'></th>
                      <th className='text-white'>Details</th>
                      <th className='text-white'>Author</th>
                      <th className='text-white'>Creation Date</th>
                      <th className='text-white'>Report ID</th>
                      <th className='text-white'>Status</th>
                  </tr>
              </thead>
              <tbody>
                    <tr onClick={() => navigate('/trip/view-trip')}>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </td>
                        <td className='text-white'>
                            Report 1
                        </td>
                        <td className='text-white'>
                            James
                        </td>
                        <td className='text-white'>
                            15/10/2024
                        </td>
                        <td className='text-white'>
                            R001
                        </td>
                        <td className='text-success'>
                            Submitted
                        </td>
                    </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}
