import React, { useState } from 'react'

export default function CreateExpenses() {
    const [expense, setExpense] = useState({
        subject: '',
        merchant: '',
        date: '',
        total: {
            amount: 0,
            currency: ''
        },
        category: '',
        description: '',
        employee: ''
    })

    const changeInput = (e) => {
        const {id, value} = e.target
        console.log(id, value);
        setExpense({...expense, [id]: value})
    }

  return (
    <>
        <h2 className='fw-600 text-white'>Create New Expense</h2>
        <div className=''>
            <div className="form-group row mt-2">
                <label htmlFor="Subject" className="col-sm-1 col-form-label font-weight-bold">Subject<sup>*</sup> </label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="subject" placeholder="Enter Subject" value={expense.subject} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Merchant" className="col-sm-1 col-form-label font-weight-bold">Merchant<sup>*</sup> </label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="merchant" placeholder="Enter Merchant" value={expense.merchant} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Date" className="col-sm-1 col-form-label font-weight-bold">Date<sup>*</sup> </label>
                <div className="col-sm-10">
                    <input type="date" className="input-field-content w-100" required id="date" placeholder="Enter Date" value={expense.date} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Total" className="col-sm-1 col-form-label font-weight-bold">Total<sup>*</sup> </label>
                <div className="col-sm-10">
                    <div className='d-flex align-items-center gap-point5rem'>
                        <input type="text" className="input-field-content w-100" required id="total" placeholder="Enter Total" value={expense.total.currency} onChange={(e) => changeInput(e)} />
                        <select className="input-select-content" id="currency" required onChange={(e) => changeInput(e)}>
                            <option value="">Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Category" className="col-sm-1 col-form-label font-weight-bold">Category<sup>*</sup> </label>
                <div className="col-sm-10">
                    <select className="input-select-content w-100" id="category" required value={expense.category} onChange={(e) => changeInput(e)}>
                        <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Description" className="col-sm-1 col-form-label font-weight-bold">Description</label>
                <div className="col-sm-10">
                    <textarea type="Description" required className="textarea-field-content w-100" id="description" placeholder="Enter Description" value={expense.description} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Employee" className="col-sm-1 col-form-label font-weight-bold">Employee<sup>*</sup> </label>
                <div className="col-sm-10">
                    <input type="text" required className="input-field-content w-100" id="employee" placeholder="Enter Employee" value={expense.employee} onChange={(e) => changeInput(e)}/>
                </div>
            </div>
        </div>
    </>
  )
}
