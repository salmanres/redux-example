import React, { Fragment } from 'react';
import FoodData from './Shared/FoodData';
import { Link } from 'react-router-dom';

function FoodPage() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 mt-3'>
                        <h4 className='text-center'>Food Page</h4>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap justify-content-between'>
                        {FoodData.map((item) => (
                            <div className="card card-data">
                                <img src={item.imgdata} className="card-img-top" alt="..." />
                                <div className="card-bo`dy">
                                    <Link to={`/home/fooddetails/${item.id}`} className="card-title">{item.rname}</Link>
                                    <p className="card-text"><b>Price: </b>{item.price}/-</p>
                                    <button className='btn btn-warning'>ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FoodPage