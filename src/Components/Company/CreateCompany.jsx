import React, { useEffect, useState } from 'react'
import company_types from '../../JSONS/companyTypes.json'
import './CreateCompany.css'
import Multiselect from 'multiselect-react-dropdown'

export default function CreateCompany() {
    const [company, setCompany] = useState({
        company_name: '',
        currency: '',
        company_email: '',
        industry_type: '',
        departments: [
            {
                department_name: '',
                department_lead: '',
                description: '',
                email: '',
                phone: '',
                started_on: ''
            }
        ],
        company_code: ''
    })

    const removeDepartment = (index) => {
        setCompany({
            ...company,
            departments: company.departments.filter((dep, dep_idx) => dep_idx != index)
        })
    }

    const addMoreDepartments = () => {
        setCompany({
            ...company,
            departments: [
                ...company.departments,
                {
                    department_name: '',
                    department_lead: '',
                    description: '',
                    email: '',
                    phone: '',
                    started_on: ''
                }
            ] 
        })
    }

    useEffect(() => {
        console.log(company_types);
    }, [])
    return (
        <div className=''>
            <h2 className='fw-600 text-white'>New Company</h2>
            <div className="form-group row mt-2">
                <label htmlFor="Subject" className="col-sm-2 col-form-label font-weight-bold">Company Name<sup>*</sup> </label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="subject" placeholder="Enter Company Name" value={company.subject} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Currency" className="col-sm-2 col-form-label font-weight-bold">Currency<sup>*</sup> </label>
                <div className="col-sm-4">
                    <input type="text" className="input-field-content w-100" required id="currency" placeholder="Enter Currency" value={company.currency} onChange={(e) => changeInput(e)} />
                </div>
                <label htmlFor="Email" className="col-sm-1 col-form-label font-weight-bold">Email<sup>*</sup> </label>
                <div className="col-sm-5">
                    <input type="text" className="input-field-content w-100" required id="Email" placeholder="Enter Email" value={company.currency} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Subject" className="col-sm-2 col-form-label font-weight-bold">Industry Type<sup>*</sup> </label>
                <div className="col-sm-10">
                    {/* <select className="input-select-content" id="currency" required onChange={(e) => changeInput(e)}>
                        <option value="">Select</option>
                        {
                            company_types.map(x => (
                                <option value={x}>{x}</option>
                            ))
                        }
                    </select> */}
                    <Multiselect
                        displayValue=""
                        onKeyPressFn={function noRefCheck(){}}
                        onRemove={function noRefCheck(){}}
                        onSearch={function noRefCheck(){}}
                        onSelect={function noRefCheck(){}}
                        options={company_types}
                        isObject={false}
                        singleSelect
                        />
                </div>
            </div>
            <h4 className='fw-600 text-white my-3'>Add New Department</h4>
            <div className="departmentBoxes">
                {
                    company.departments.map((comp, comp_index) => (
                        <div className='department-box mt-2'>
                            {
                                company.departments.length > 1 && 
                                <div className='d-flex align-items-center justify-content-end'>
                                    <i className='fa fa-minus-circle text-danger pointer' onClick={() => removeDepartment(comp_index)}></i>
                                </div>
                            }
                            <div className="form-group row mt-2">
                                <label htmlFor="department_name" className="col-sm-2 col-form-label font-weight-bold">Department Name<sup>*</sup> </label>
                                <div className="col-sm-4">
                                    <input type="text" className="input-field-content w-100" required id="department_name" placeholder="Enter Department Name" value={comp.department_name} onChange={(e) => changeInput(e)} />
                                </div>
                                <label htmlFor="department_lead" className="col-sm-2 col-form-label font-weight-bold">Department Lead<sup>*</sup> </label>
                                <div className="col-sm-4">
                                    <input type="text" className="input-field-content w-100" required id="department_lead" placeholder="Enter Department Lead" value={comp.department_lead} onChange={(e) => changeInput(e)} />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">Email<sup>*</sup> </label>
                                <div className="col-sm-4">
                                    <input type="text" className="input-field-content w-100" required id="email" placeholder="Enter Email" value={comp.email} onChange={(e) => changeInput(e)} />
                                </div>
                                <label htmlFor="phone" className="col-sm-2 col-form-label font-weight-bold">Phone<sup>*</sup> </label>
                                <div className="col-sm-4">
                                    <input type="text" className="input-field-content w-100" required id="phone" placeholder="Enter Phone" value={comp.phone} onChange={(e) => changeInput(e)} />
                                </div>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">Description</label>
                                <div className="col-sm-10">
                                    <textarea type="Description" required className="textarea-field-content w-100" id="description" placeholder="Enter Description" value={comp.description} onChange={(e) => changeInput(e)} />
                                </div>
                            </div>
                        </div>
                    ))
                }   
            </div>
            <div className='d-flex align-items-center justify-content-end mt-3'>
                <button className='btn btn-primary' onClick={addMoreDepartments}>+ Add Department</button>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-point5rem mt-3'>
                <button className='btn btn-danger'>Cancel</button>
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    )
}
