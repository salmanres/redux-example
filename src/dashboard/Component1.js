import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

function Component1() {

    const count = useSelector((state) => state.counter.value);
    const cartData = useSelector((state) => state.cart.cart);
    console.log(cartData);

    return (
        <Fragment>
            <div className='container'>
                <h1>Count: {count}</h1>

                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </div>


        </Fragment>
    )
}

export default Component1