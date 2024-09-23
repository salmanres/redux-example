import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

function Component1() {
    
    const count = useSelector((state)=> state.counter.value);
 
    return (
        <Fragment>
            <div className='container'>               
                <h1>Count: {count}</h1>
            </div>
        </Fragment>
    )
}

export default Component1