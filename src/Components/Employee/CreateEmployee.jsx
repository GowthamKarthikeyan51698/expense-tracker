import React, { useState } from 'react'

export default function CreateEmployee() {
  const [employee, setEmployee] = useState({
    first_name: '',
    middle_name: '',
    allocated_amount: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    company: [],
    personal_email: '',
    credentials: {
      login_email: '',
      login_password: ''
    },
    user_role: '',
  })

  const changeInput = (e) => {
    let {id, value} = e.target;
    console.log(id, value);
    if(id == 'login_email' || id == 'login_password'){
        setEmployee({...employee, credentials: {...employee.credentials, [id]: value}})
    } else {
        setEmployee({...employee, [id]: value})
    }
  }

  return (
    <>
      <h2 className='fw-600 text-white'>New Employee</h2>
      <div className=''>
        <div className="form-group row mt-2">
            <label htmlFor="first_name" className="col-sm-2 col-form-label font-weight-bold">First Name<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="first_name" placeholder="Enter First Name" value={employee.first_name} onChange={(e) => changeInput(e)} />
            </div>
            <label htmlFor="middle_name" className="col-sm-2 col-form-label font-weight-bold">Middle Name<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="middle_name" placeholder="Enter Middle Name" value={employee.middle_name} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className="form-group row mt-2">
          <label htmlFor="last_name" className="col-sm-2 col-form-label font-weight-bold">Last Name<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="last_name" placeholder="Enter Last Name" value={employee.last_name} onChange={(e) => changeInput(e)} />
            </div>
            <label htmlFor="date_of_birth" className="col-sm-2 col-form-label font-weight-bold">Date Of Birth<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="date" className="input-field-content w-100" required id="date_of_birth" placeholder="Enter Date Of Birth" value={employee.date_of_birth} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="Total" className="col-sm-2 col-form-label font-weight-bold">Gender<sup>*</sup> </label>
            <div className="col-sm-4">
                <div className='d-flex align-items-center gap-point5rem'>
                    <select className="input-select-content" id="gender" required onChange={(e) => changeInput(e)}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="TransGender">TransGender</option>
                        <option value="Prefer not to answer">Prefer not to answer</option>
                    </select>
                </div>
            </div>
            <label htmlFor="Total" className="col-sm-2 col-form-label font-weight-bold">Company<sup>*</sup> </label>
            <div className="col-sm-4">
                <div className='d-flex align-items-center gap-point5rem'>
                    <select className="input-select-content" id="company" required onChange={(e) => changeInput(e)}>
                        <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="first_name" className="col-sm-2 col-form-label font-weight-bold">Personal Email<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="email" className="input-field-content w-100" required id="personal_email" placeholder="Enter Personal Email ID" value={employee.personal_email} onChange={(e) => changeInput(e)} />
            </div>
            <label htmlFor="allocated_amount" className="col-sm-2 col-form-label font-weight-bold">Amount Allocation<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="allocated_amount" placeholder="Enter Amount" value={employee.allocated_amount} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <h6 className='text-white mt-5'>Set Credentials</h6>
        <div className="form-group row mt-2">
            <label htmlFor="first_name" className="col-sm-2 col-form-label font-weight-bold">Login ID<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="email" className="input-field-content w-100" required id="login_email" placeholder="Enter Login Email ID" value={employee.credentials.login_email} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="first_name" className="col-sm-2 col-form-label font-weight-bold">Password<sup>*</sup> </label>
            <div className="col-sm-4">
                <input type="password" className="input-field-content w-100" required id="login_password" placeholder="Enter Password" value={employee.credentials.login_password} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-point5rem mt-3'>
            <button className='btn btn-danger'>Cancel</button>
            <button className='btn btn-success'>Add Employee</button>
        </div>
      </div>
    </>
  )
}
