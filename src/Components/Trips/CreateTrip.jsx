import React, { useEffect, useState } from 'react'

export default function CreateTrip() {
    const [options, setOptions] = useState(["Flight", "Hotel", "Bus", "Train", "Food"]);
    const [trip, setTrip] = useState({
        name: '',
        type: '',
        purpose: '',
        itinerary: []
    })
    

  const changeInput = (e) => {}

  const removeItinerary = (idx) => {
    const itinerary = [...trip.itinerary]
    const opt = [...options] 
    opt.push(itinerary[idx].name)
    itinerary.splice(idx, 1);
    setTrip({itinerary})
    setOptions(opt)
  }

  const AddAnotherItnerary = (e) => {
    let itinerary = [...trip.itinerary]
    if(e == 'Bus' || e == 'Train' || e == 'Flight'){
        itinerary.push({
            name: e,
            trip_type: '',
            departure_details: {
                depart_from: '',
                depart_date: '',
                depart_time: ''
            },
            arrival_details: {
                arrival_to: '',
                arrival_date: '',
                arrival_time: ''
            },
            estimated_amount: ''
        })
    } else if(e == 'Food'){
        itinerary.push({
            name: 'Food',
            date_range: [],
            estimated_amount: '',
            note: ''
        })
    } else if(e == 'Hotel'){
        itinerary.push(
            {
                name: "Hotel",
                checkin_date: '',
                check_in:'',
                checkout_date: '',
                check_out: '',
                estimated_amount: ''
            }
        )
    }
    setTrip({itinerary})
    let opt = options.filter((x) => (itinerary.map(y => y.name).indexOf(x) == -1))
    setOptions(opt)
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
                    <fieldset id="group2" value={trip.trip_type}>
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
            <h3 className='mt-2 text-white pb-2'>Itinerary</h3>
            {
                trip.itinerary.length == 0 && <div className='text-white text-center fw-500'> No Itineraries Added </div>
            }
            {
                trip.itinerary.map((x, x_index) => {
                    if(x.name == 'Flight' || x.name == 'Bus' || x.name == 'Train'){
                        return (
                            <div key={x + " " +x_index}>
                                <hr className='text-white'/>
                                <div className='d-flex align-items-center justify-content-end'>
                                    <i className='fa fa-minus-circle text-danger pointer' onClick={() => removeItinerary(x_index)}></i>
                                </div>
                                <div className="form-group row mt-2">
                                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">{x.name}<sup>*</sup></label>
                                    <div className="col-sm-10" style={{display: 'flex', alignItems: 'center'}}>
                                        <fieldset id="group2" value={x.flight_name}>
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
                                <div className="form-group row mt-2">
                                    <label htmlFor="departure" className="col-sm-2 col-form-label font-weight-bold">Depart from<sup>*</sup></label>
                                    <div className="col-sm-6">
                                        <input type="text" className="input-field-content w-100" required id="departure" placeholder="Enter Departure" value={x.departure_details.depart_from} onChange={(e) => changeInput(e)} />
                                    </div>
                                    <label htmlFor="departure_date" className="col-sm-1 col-form-label font-weight-bold">Date<sup>*</sup></label>
                                    <div className="col-sm-3">
                                        <input type="text" className="input-field-content w-100" required id="departure_date" placeholder="Enter Name" value={x.departure_details.depart_date} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label htmlFor="arrival_to" className="col-sm-2 col-form-label font-weight-bold">Destination<sup>*</sup></label>
                                    <div className="col-sm-6">
                                        <input type="text" className="input-field-content w-100" required id="arrival_to" placeholder="Enter Destination" value={x.arrival_details.arrival_to} onChange={(e) => changeInput(e)} />
                                    </div>
                                    <label htmlFor="arrival_date" className="col-sm-1 col-form-label font-weight-bold">Date<sup>*</sup></label>
                                    <div className="col-sm-3">
                                        <input type="text" className="input-field-content w-100" required id="arrival_date" placeholder="Enter Date" value={x.arrival_details.arrival_date} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label htmlFor="Name" className="col-sm-2 col-form-label font-weight-bold">Estimated Amount<sup>*</sup></label>
                                    <div className="col-sm-10">
                                        <input type="text" className="input-field-content w-100" required id="name" placeholder="Enter Name" value={x.estimated_amount} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                            </div>
                        )
                    } else if((x.name == 'Hotel')){
                        return (
                            <div key={x + " " +x_index}>
                                <hr className='text-white'/>
                                <div className='d-flex align-items-center justify-content-end'>
                                    <i className='fa fa-minus-circle text-danger pointer' onClick={() => removeItinerary(x_index)}></i>
                                </div>
                                <h6 className='my-4 text-white'>{x.name}</h6>
                                <div>
                                    <div className="form-group row">
                                        <label htmlFor="check_in" className="col-sm-2 col-form-label font-weight-bold">Check-in<sup>*</sup></label>
                                        <div className="col-sm-4">
                                            <input type="text" className="input-field-content w-100 mt-2" required id="check_in" placeholder="Enter Check-in" value={x.check_in} onChange={(e) => changeInput(e)} />
                                        </div>
                                        <label htmlFor="check_in_date" className="col-sm-2 col-form-label font-weight-bold">Check-in Date<sup>*</sup></label>
                                        <div className="col-sm-4">
                                            <input type="text" className="input-field-content w-100 mt-2" required id="check_in_date" placeholder="Enter Check-in Date" value={x.checkin_date} onChange={(e) => changeInput(e)} />
                                        </div>
                                        <label htmlFor="check_out" className="col-sm-2 col-form-label font-weight-bold">Check-out<sup>*</sup></label>
                                        <div className="col-sm-4">
                                            <input type="text" className="input-field-content w-100 mt-2" required id="check_out" placeholder="Enter Check-out" value={x.check_out} onChange={(e) => changeInput(e)} />
                                        </div>
                                        <label htmlFor="check_out_date" className="col-sm-2 col-form-label font-weight-bold">Check-out Date<sup>*</sup></label>
                                        <div className="col-sm-4">
                                            <input type="text" className="input-field-content w-100 mt-2" required id="check_out_date" placeholder="Enter Check-out" value={x.checkout_date} onChange={(e) => changeInput(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label htmlFor="estimated_amount" className="col-sm-2 col-form-label font-weight-bold">Estimated Amount<sup>*</sup></label>
                                    <div className="col-sm-10">
                                        <input type="text" className="input-field-content w-100" required id="estimated_amount" placeholder="Enter Estimated Amount" value={x.estimated_amount} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                            </div>
                        )
                    } else if(x.name == 'Food'){
                        return (
                            <div key={x + " " +x_index}>  
                                <hr className='text-white'/>
                                <div className='d-flex align-items-center justify-content-end'>
                                    <i className='fa fa-minus-circle text-danger pointer' onClick={() => removeItinerary(x_index)}></i>
                                </div>
                                <h6 className='my-4 text-white'>{x.name}</h6>
                                <div className="form-group row mt-2">
                                    <label htmlFor="date_range" className="col-sm-2 col-form-label font-weight-bold">Date Range<sup>*</sup></label>
                                    <div className="col-sm-4">
                                        <input type="text" className="input-field-content w-100" required id="date_range" placeholder="Enter Date Range" value={x.date_range} onChange={(e) => changeInput(e)} />
                                    </div>
                                    <label htmlFor="estimated_amount" className="col-sm-2 col-form-label font-weight-bold">Estimated Amount<sup>*</sup></label>
                                    <div className="col-sm-4">
                                        <input type="text" className="input-field-content w-100" required id="estimated_amount" placeholder="Enter Estimated Amount" value={x.estimated_amount} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                                <div className="form-group row mt-2">
                                    <label htmlFor="note" className="col-sm-2 col-form-label font-weight-bold">Note<sup>*</sup></label>
                                    <div className="col-sm-10">
                                        <textarea type="text" required className="textarea-field-content w-100" id="note" placeholder="Enter Note" value={x.note} onChange={(e) => changeInput(e)} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

            <div className="dropdown my-4">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" disabled={options.length == 0}>
                    Add an Itnerary
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    {
                        options.map((itnerary, itnerary_index) => (
                            <li key={itnerary_index}><a className="dropdown-item pointer" onClick={() => AddAnotherItnerary(itnerary)}>{itnerary}</a></li>
                        ))
                    }
                </ul>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-point5rem mt-3'>
                <button className='btn btn-danger'>Cancel</button>
                <button className='btn btn-success'>Submit</button>
            </div>
        </div>
    </>
  )
}
