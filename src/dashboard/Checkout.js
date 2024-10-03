import { Button } from 'bootstrap';
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFoodItem } from './redux/MyCartSlice';

function Checkout() {

    const myData = useSelector((state) => state.myFoodCart.items);
    const totalAmount = useSelector((state) => state.myFoodCart.totalAmount);
    const dispatch = useDispatch();

    const handleRemove = (item) => {
        dispatch(removeFoodItem(item));
    }

    console.log(myData);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-12'>
                        {myData.map((items) => (
                            <div className="card mb-3 card-cart" key={items.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={items.imgdata} className="img-fluid rounded-start cart-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{items.rname}</h5>
                                            <p className="card-text"><b>Price : </b>{items.price}/-</p>
                                            <button className="btn btn-danger " onClick={() => handleRemove(items)}>remove item</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-12 col-lg-12'>
                        <h4>TOTAL AMOUNT: {totalAmount}</h4>
                        <button>Pay Now</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Checkout