import React, { useState } from 'react'

export default function CreateTrip() {
  const [trip, setTrip] = useState({
    name: '',
    type: '',
    purpose: '',
    itnerary: {
        flight: '',
        departure_details: {
            depart_from: '',
            depart_date: ''
        },
        arrival_details: {
            arrival_to: '',
            date: ''
        },
        budget_limit: '',
        Accomodation: {
            check_in:'',
            check_out: '',
            hotel: ''
        }
    }
  })
  const changeInput = (e) => {
    console.log(e);
  }
  return (
    <>
        <h2 className='fw-600 text-white'>New Trip</h2>
        <div className=''>
            <div className="form-group row mt-2">
                <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Name<sup>*</sup></label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.name} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Type<sup>*</sup></label>
                <div className="col-sm-10" style={{display: 'flex', alignItems: 'center'}}>
                    <fieldset id="group2" value={trip.type}>
                        <input type="radio" className='form-check-input mx-2' id="domestic" value="domestic" name="trip_type" />
                        <label className="form-check-label" htmlFor="domestic">
                            Domestic
                        </label>
                        <input type="radio" className='form-check-input mx-2' id="international" value="international" name="trip_type" />
                        <label className="form-check-label" htmlFor="international">
                            International
                        </label>
                    </fieldset>
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Purpose" className="col-sm-2 col-form-label font-weight-bold">Purpose<sup>*</sup></label>
                <div className="col-sm-10">
                    <textarea type="Purpose" required className="textarea-field-content w-100" id="purpose" placeholder="Enter Purpose" value={trip.purpose} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <h3 className='mt-2 header-underline text-white pb-2'>Itneraty</h3>
            <div className="form-group row mt-2">
                <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">FLIGHT<sup>*</sup></label>
                <div className="col-sm-10" style={{display: 'flex', alignItems: 'center'}}>
                    <fieldset id="group2" value={trip.itnerary.flight}>
                        <input type="radio" className='form-check-input mx-2' id="one-way" value="one-way" name="trip_type" />
                        <label className="form-check-label" htmlFor="one-way">
                            One-way
                        </label>
                        <input type="radio" className='form-check-input mx-2' id="RoundTrip" value="round-trip" name="trip_type" />
                        <label className="form-check-label" htmlFor="RoundTrip">
                            RoundTrip
                        </label>
                    </fieldset>
                </div>
            </div>
            <div>
                <div className="form-group row mt-2">
                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Depart from<sup>*</sup></label>
                    <div className="col-sm-6">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                    <label htmlFor="Name" className="col-sm-1 col-form-label font-weight-bold">Date<sup>*</sup></label>
                    <div className="col-sm-3">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                </div>
            </div>
            <div>
                <div className="form-group row mt-2">
                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Destination<sup>*</sup></label>
                    <div className="col-sm-6">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                    <label htmlFor="Name" className="col-sm-1 col-form-label font-weight-bold">Date<sup>*</sup></label>
                    <div className="col-sm-3">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Budget Limit<sup>*</sup></label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.name} onChange={(e) => changeInput(e)} />
                </div>
            </div>
            <h6 className='my-4 text-white'>ACCOMODATION</h6>
            <div>
                <div className="form-group row mt-2">
                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Check-in<sup>*</sup></label>
                    <div className="col-sm-4">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Check-out<sup>*</sup></label>
                    <div className="col-sm-4">
                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.itnerary.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                    </div>
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Hotel<sup>*</sup></label>
                <div className="col-sm-10">
                    <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={trip.name} onChange={(e) => changeInput(e)} />
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
