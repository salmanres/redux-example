import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import FoodData from './Shared/FoodData';

function FoodDetails() {

    const { id } = useParams();

    console.log(id);

    const food = FoodData.find((item) => item.id == id);

    console.log(food);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 mt-3'>
                        <h4 className='text-center'>Food Details</h4>
                        <div className="card card2">
                            <img src={food.imgdata} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{food.rname}</h5>
                                <p className="card-text">{food.address}</p>
                                <p className="card-text">{food.rating}</p>
                                <p className="card-text">Price : {food.price}/-</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FoodDetails