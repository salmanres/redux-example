import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/CounterSlice';

function Component2() {

  const cusname = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment());
  }

  return (
    <Fragment>
        <div className='container'>
            <h1>count: {cusname}</h1>
            <button className='btn btn-primary m-2' onClick={handleIncrement}>increment</button>
        </div>
    </Fragment>
  )
}

export default Component2