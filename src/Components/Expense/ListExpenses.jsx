import React from 'react'

export default function ListExpenses() {
  return (
    <>
        <h3 className='fw-600 text-white'>Expenses</h3>
        <div className='overflow-auto'>
            <table className='w-100'>
                <thead>
                    <tr>
                        <th className='width-50px'></th>
                        <th className='text-white'>Details</th>
                        <th className='text-white'>Merchant</th>
                        <th className='text-white'>Amount</th>
                        <th className='text-white'>Status</th>
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
                </thead>
            </table>
        </div>
    </>
  )
}
