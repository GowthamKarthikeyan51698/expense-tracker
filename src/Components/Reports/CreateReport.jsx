import React, { useState } from 'react'

export default function CreateReport() {
    const [report, setReports] = useState({
        report_name: '',
        report_id: '',
        author: '',
        creation_date: '',
        company_name: ''
    })
  return (
    <>
        <h2 className='fw-600 text-white'>New Report</h2>
        <div className=''>
            <div className="form-group row mt-2">
                <label htmlFor="report_name" className="col-sm-2 col-form-label font-weight-bold">Report Name<sup>*</sup></label>
                <div className="col-sm-4">
                    <input type="text" className="input-field-content w-100" required id="report_name" placeholder="Enter Report Name" value={report.name} onChange={(e) => changeInput(e)} />
                </div>
                <label htmlFor="author" className="col-sm-2 col-form-label font-weight-bold">Author<sup>*</sup></label>
                <div className="col-sm-4">
                    <input type="text" className="input-field-content w-100" required id="author" placeholder="Enter Author Name" value={report.author} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="creation_date" className="col-sm-2 col-form-label font-weight-bold">Creation Date<sup>*</sup></label>
                <div className="col-sm-4">
                    <input type="date" className="input-field-content w-100" required id="creation_date" placeholder="Enter Date" value={report.creation_date} onChange={(e) => changeInput(e)} />
                </div>
                <label htmlFor="company_name" className="col-sm-2 col-form-label font-weight-bold">Company Name<sup>*</sup></label>
                <div className="col-sm-4">
                    <input type="text" className="input-field-content w-100" required id="company_name" placeholder="Enter Company Name" value={report.company_name} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="report_id" className="col-sm-2 col-form-label font-weight-bold">Report ID<sup>*</sup></label>
                <div className="col-sm-4">
                    <input type="text" className="input-field-content w-100" required id="report_id" placeholder="Enter Company Name" value={report.report_id} onChange={(e) => changeInput(e)} />
                </div>
            </div>
        </div>
        <div className='mt-3'>
            <h5 className='text-white'>Link Expenses</h5>
            <div>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-white'>Details</th>
                            <th className='text-white'>Merchant</th>
                            <th className='text-white'>Amount</th>
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
                                Food Catering
                            </td>
                            <td className='text-white'>
                                McFood
                            </td>
                            <td className='text-white'>
                                $250.00
                            </td>
                            <td className='text-white'>
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
                                Food Catering
                            </td>
                            <td className='text-white'>
                                McFood
                            </td>
                            <td className='text-white'>
                                $250.00
                            </td>
                            <td className='text-white'>
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
                                Food Catering
                            </td>
                            <td className='text-white'>
                                McFood
                            </td>
                            <td className='text-white'>
                                $250.00
                            </td>
                            <td className='text-white'>
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
                                Food Catering
                            </td>
                            <td className='text-white'>
                                McFood
                            </td>
                            <td className='text-white'>
                                $250.00
                            </td>
                            <td className='text-white'>
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
                                Food Catering
                            </td>
                            <td className='text-white'>
                                McFood
                            </td>
                            <td className='text-white'>
                                $250.00
                            </td>
                            <td className='text-white'>
                                Not Submitted
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-point5rem mt-3'>
            <button className='btn btn-danger'>Cancel</button>
            <button className='btn btn-success'>Submit</button>
        </div>
    </>
  )
}
