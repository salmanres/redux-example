import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/register");
    };

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 strip'>

                    </div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-4 col-md-5 col-sm-6 col-10 border shadow p-3 rounded-3 mt-5'>
                        <h2 className='text-center'>LOGIN FORM</h2>
                        <hr />
                        <label className='form-label'>Email</label>
                        <input type="text" className='form-control mb-2' />
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control mb-2' />
                        <button className='btn btn-warning w-100 mt-2 p-2'>LOGIN HERE</button>
                        <label className='text-end mt-2'>Forgot Password?</label>
                        <button className='btn  mt-2 p-2' onClick={}>
                           signup
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login