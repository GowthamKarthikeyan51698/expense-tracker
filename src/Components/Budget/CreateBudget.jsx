import React, { useState } from 'react'

export default function CreateBudget() {
  const [budget, setBudget] = useState({
    fiscal_year: '',
    amount: '',
    creation_date: '',
    author: ''
  })

  const changeInput = (e) => {
    console.log(e);
    let {id, value} = e.target;
    console.log(id, value);
    setBudget({...budget, [id]: value})
  }

  return (
    <>
      <h2 className='fw-600 text-white'>New Budget</h2>
      <div className=''>
        <div className="form-group row mt-2">
            <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Fiscal Year<sup>*</sup></label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="fiscal_year" placeholder="Enter Fiscal Year" value={budget.fiscal_year} onChange={(e) => changeInput(e)} />
            </div>
            <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Budget Amount<sup>*</sup></label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="amount" placeholder="Enter Amount" value={budget.amount} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className="form-group row mt-2">
            <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Creation Date<sup>*</sup></label>
            <div className="col-sm-4">
                <input type="date" className="input-field-content w-100" required id="creation_date" placeholder="Enter Date" value={budget.creation_date} onChange={(e) => changeInput(e)} />
            </div>
            <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Author<sup>*</sup></label>
            <div className="col-sm-4">
                <input type="text" className="input-field-content w-100" required id="author" placeholder="Enter Author" value={budget.author} onChange={(e) => changeInput(e)} />
            </div>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-point5rem mt-3'>
              <button className='btn btn-danger'>Cancel</button>
              <button className='btn btn-success'>Submit</button>
          </div>
      </div>
    </>
  )
}
