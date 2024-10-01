import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

function ReactHookForm() {

    const {
        register,  //to get data
        handleSubmit,   // to call opetative function
        formState: { errors },  // to catch & show errors
    } = useForm();

    const storeData = (getValues) => {
        console.log(getValues);
        localStorage.setItem("userdata", JSON.stringify(getValues));
    }



    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-5 col-12'>
                        <h1>REACT HOOK FORM</h1>
                        <form onSubmit={handleSubmit(storeData)}>
                            <input type='text' className='form-control mb-2' placeholder='enter fullname' {...register('fullname', { required: true })} />
                            {errors.fullname && <p className='text-warning'>full name is required</p>}
                            <input type='email' className='form-control mb-2' placeholder='enter email' {...register('email', { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, required: true })} />
                            {errors.email && <p>email is required to register...</p>}
                            <input type='number' className='form-control mb-2' placeholder='enter number' {...register('mobile', { required: true })} />
                            {errors.mobile && <p>mobile is required</p>}
                            <input type='password' className='form-control mb-2' placeholder='enter password' {...register('password', { required: true })} />
                            {errors.password && <p>password is required.</p>}
                            <input type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ReactHookForm