import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    console.log(data);


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 strip'>

                    </div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-4 col-md-5 col-sm-6 col-10 border shadow p-3 rounded-3'>
                        <h2 className='text-center'>REGISTER FORM</h2>
                        <hr />
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control mb-2' name='name' onChange={handleChange} />
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control mb-2' name='email' onChange={handleChange} />
                        <label className='form-label'>Create Password</label>
                        <input type="password" className='form-control mb-2' name='password' onChange={handleChange} />
                        <button className='btn btn-warning w-100 mt-2 p-2'>REGISTER HERE</button>
                        <label className='text-end mt-2'>Forgot Password?</label>
                        <Link to="/" className=' w-100 mt-3 p-2 mb-3'>SIGN IN HERE</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage