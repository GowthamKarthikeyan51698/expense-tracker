import React from 'react'

export default function ListReports() {
  return (
    <>
      <h3 className='fw-600 text-white'>Reports</h3>
      <div className='overflow-auto'>
          <table className='w-100'>
              <thead>
                  <tr>
                      <th className='width-50px'></th>
                      <th className='text-white'>Report Name</th>
                      <th className='text-white'>Author</th>
                      <th className='text-white'>Creation Date</th>
                      <th className='text-white'>Company Name</th>
                      <th className='text-white'>Report ID</th>
                      <th className='text-white'>Status</th>
                  </tr>
              </thead>
              <tbody>
              <tr>
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
                          McClaren
                      </td>
                      <td className='text-white'>
                          R001
                      </td>
                      <td className='text-success'>
                          Submitted
                      </td>
                  </tr>
                  <tr>
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
                          McClaren
                      </td>
                      <td className='text-white'>
                          R001
                      </td>
                      <td className='text-danger'>
                          Not Submitted
                      </td>
                  </tr>
                  <tr>
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
                          McClaren
                      </td>
                      <td className='text-white'>
                          R001
                      </td>
                      <td className='text-danger'>
                          Not Submitted
                      </td>
                  </tr>
                  <tr>
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
                          McClaren
                      </td>
                      <td className='text-white'>
                          R001
                      </td>
                      <td className='text-danger'>
                          Not Submitted
                      </td>
                  </tr>
                  <tr>
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
                          McClaren
                      </td>
                      <td className='text-white'>
                          R001
                      </td>
                      <td className='text-danger'>
                          Not Submitted
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}
