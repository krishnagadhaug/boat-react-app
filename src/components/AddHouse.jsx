import React from 'react'
import NavBar from './NavBar'

const AddHouse = () => {
  return (
    <div>

<NavBar/>
<div className="container">
        <h1><b>Add Houseboat</b></h1>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Boat Id</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
<label htmlFor="" className="form-label">BoatName</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Categoty</label>
<select name="" id="" className="form-control">
    <option value="">Budget</option>
    <option value="">Deluxe</option>
    <option value="">Premium</option>
    <option value="">Luxury</option>
</select>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Bedrooms</label><br />
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xx-4">

<label htmlFor="" className="form-label">Capacity</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">AC type</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Price per night</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Route</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Built year</label>
<input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<label htmlFor="" className="form-label">Image URL</label>
<input type="url" className="form-control" />

                    </div>

<div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 co-xxl-4">

<label htmlFor="" className="form-label">Description</label>
<textarea name="" id="" className="input-control"></textarea>

                    </div>



                    <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success">Add Boat</button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default AddHouse