import React, { useEffect, useState } from 'react'
import './Settings.css'

export default function Settings() {
  const [categories, setCategory] = useState([])
  const [expenseConfig, setExpenseConfig] = useState({
    set_max: false,
    max_count: 0
  })
  const changeInput = (e, index) => {
    let tempArray = [...categories]
    tempArray[index] = e.target.value
    setCategory(tempArray)
  }

  const removeCategory = (index) => {
    setCategory(categories.filter((x, x_index) => x_index != index));
  }

  const confirmCategory = (index) => {
    console.log(index);
  }

  const checkCount = (e) => {
    setExpenseConfig({...expenseConfig, max_count: e.target.value})
  }

  const checkC = (e) => {
    setExpenseConfig({...expenseConfig, set_max: e.target.checked})
  }

  useEffect(() => {
    setCategory(
      [
        'Office expenses', 'Travel expenses', 'Compensation', 'Legal and professional fees', 
        'Restructuring costs', 'Damages caused by disasters', 'Inventory write-offs', 'Lawsuit settlements', 
        'Direct materials and labour costs', 'Factory overhead', 'Packaging and storage and other costs'
      ]
    )
  }, [])
  return (
    <>
      <h2 className='fw-600 text-white'>Settings</h2>
      <h5 className='fw-600 text-white mt-3'>Categories</h5>
      <div className='row'>
        {
          categories.map((x, x_index) => (
            <div className='col-lg-4 col-md-6 col-sm-12 mt-2' key={x_index}>
              <div className='d-flex align-items-center gap-point3rem'>
                <input type="text" required className="input-field-content w-100" placeholder="Enter Category" value={x} onChange={(e) => changeInput(e, x_index)}/>
                <i className='fa fa-minus-circle text-danger pointer' onClick={() => removeCategory(x_index)}></i>
                <i className='fa fa-check-circle text-success pointer' onClick={() => confirmCategory(x_index)}></i>
              </div>
            </div>
          ))
        }
      </div>
      <h5 className='fw-600 text-white mt-4'>Expense Configurations</h5>
      <div className='text-white d-flex mt-4'>
        <div>Set Limit for Approval Process: </div>
        <div className="form-check form-switch ms-2">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={expenseConfig.set_max} onChange={(e) => checkC(e)} />
        </div>
      </div>
      {
        expenseConfig.set_max && 
        <div className='text-white d-flex mt-4 align-items-center'>
          <div>Max Limit for Approval Process:</div>
          <input type="text" required className="input-field-content ms-2" placeholder="Enter Count" value={expenseConfig.max_count} onChange={(e) => checkCount(e)}/>
        </div>
      }
    </>
  )
}
