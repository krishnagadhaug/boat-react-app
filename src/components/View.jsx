import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {

    const[data,changeData]=useState([])
    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
            }
            useEffect(
                () => {
                    fetchData()
                },[]
            )
  return (
    <div>
<NavBar/>
<div className="container">
    <h1><center><b>Boat Details</b></center></h1>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">

{data.map(
                    (value,index)=>{
                        return(
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

<div className="card" style={{width: "18rem"}}>

                        <img src={value.image}
                        className="card-img-top" alt="..." height="300"/>

                        <div className="card-body">

                            <h5 className="card-title">{value.boatName}</h5>

                            <p><strong>Category:</strong> {value.category}</p>

                            <p><strong>Bedrooms:</strong>{value.bedrooms}</p>
                            <p><strong>Price Per Night:</strong>{value.pricePerNight}</p>
                            <p><strong>Route:</strong>{value.route}</p>

                            <button className="btn btn-success">
                                View Details
                            </button>

                        </div>

                    </div>
                    
                    </div>
                        )
                    }
                )}

</div>
    </div>
</div>

        </div>
    </div>


    
  )
}

export default View


