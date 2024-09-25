import React, { Fragment } from 'react';
import FoodData from './Shared/FoodData';
import { Link } from 'react-router-dom';

function Component4() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h4 className='text-center mt-3'>food cart</h4>
                        <hr />
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-wrap justify-content-between'>

                        {FoodData.map((item) => (
                            <div className="card food-card mt-3">
                                <img src={item.imgdata} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.rname}</h5>
                                    <p className="card-text">{item.address}</p>
                                    <p className="card-text">Price: {item.price}/-</p>
                                    <Link to='#' className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Component4