import React from 'react'
import './trip.css'

export default function ViewTrips() {
  return (
    <>
      <div className='d-flex gap-1rem'>
        <h3 className='fw-600 text-white'>Trips - Brussels 11/11/2022</h3>
        <button className='pending-btn'>Pending</button>
      </div>
      <hr className='mb-0 text-white'/>
      <div className='row'>
        <div className='col-lg-9 col-md-9 col-sm-12 mt-3'>
          <div className='fw-500 fs-12 mb-2 text-white'>Duration: November 11 - November 20</div>
          <div className='overflow-auto'>
            <table className='trip-planner-table w-100'>
              <thead>
                <tr>
                  <th>
                  <i class="fa fa-plane" aria-hidden="true"></i>
                    <span className='ms-2'>Flight</span>
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Nov</td>
                  <td>
                    <div className='d-flex align-items-center gap-1rem'>
                      <div>
                        Stockholm <br />
                        Arlanda Airport (ARN) 
                      </div>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      <div>
                        Brussels <br />
                        Brussels Airport (ARN) 
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      Economy Class 
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div>
                      Early Check-in
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>
                  <i class="fa fa-bed" aria-hidden="true"></i>
                    <span className='ms-2'>Hotel</span>
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Nov - 20 Nov</td>
                  <td>
                    <div className='d-flex align-items-center gap-1rem'>
                      Superior Hotel *****
                    </div>
                  </td>
                  <td>
                    <div>
                      Queen Suite
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div>
                      Early Check-in
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>
                  <i class="fa fa-plane" aria-hidden="true"></i>
                    <span className='ms-2'>Flight</span>
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Nov</td>
                  <td>
                    <div className='d-flex align-items-center gap-1rem'>
                      <div>
                        Stockholm <br />
                        Arlanda Airport (ARN) 
                      </div>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      <div>
                        Brussels <br />
                        Brussels Airport (ARN) 
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      Economy Class 
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div>
                      Early Check-in
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>
                  <i class="fa fa-plane" aria-hidden="true"></i>
                    <span className='ms-2'>Flight</span>
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11 Nov</td>
                  <td>
                    <div className='d-flex align-items-center gap-1rem'>
                      <div>
                        Stockholm <br />
                        Arlanda Airport (ARN) 
                      </div>
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      <div>
                        Brussels <br />
                        Brussels Airport (ARN) 
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      Economy Class 
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div>
                      Early Check-in
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-12'>
          <div className='trip-details-section'>
            <div className='row px-3'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div class="mt-3">
                  <label htmlFor="approved_by" class="form-label sub-heading text-white">Approved By:</label>
                  <div id="approved_by" className='text-white'>
                    Clara from Ops Team
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div class="mt-3">
                  <label htmlFor="approved_by" class="form-label sub-heading text-white">Policy:</label>
                  <div id="approved_by" className='text-white'>
                    Clara from Ops Team
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div class="mt-3">
                  <label htmlFor="approved_by" class="form-label sub-heading text-white">Travel documents:</label>
                  <div id="approved_by" className='text-white'>
                    Provided
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div class="mt-3">
                  <label htmlFor="approved_by" class="form-label sub-heading text-white">Purpose:</label>
                  <div id="approved_by" className='text-white'>
                    Client Visit
                  </div>
                </div>
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div class="mt-3">
                  <label htmlFor="approved_by" class="form-label sub-heading text-white">Spending budget:</label>
                  <div id="approved_by" className='text-white'>
                    $1500.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
