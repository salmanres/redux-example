import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const appNavigation = useNavigate();

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        console.log(userData);
    };

    const handleLogin = () => {

        const existingdata = JSON.parse(localStorage.getItem("users"));
        console.log(existingdata);
        const d = existingdata.find((e) => e.email === userData.email && e.password === userData.password);
        if (d) {
            alert("login successful");
            appNavigation("home");
        } else {
            alert("invalid email/password");
        }
    }



    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 strip'>

                    </div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-4 col-md-5 col-sm-6 col-10 border shadow p-4 rounded-3 mt-5'>
                        <h2 className='text-center'>LOGIN FORM</h2>
                        <hr />
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control mb-2' name='email' onChange={handleChange} />
                        <label className='form-label'>Password</label>
                        <button className='btn btn-warning w-100 mt-2 p-2' onClick={handleLogin} >LOGIN HERE</button>
                        <label className='text-end mt-2'>Forgot Password?</label>
                        <Link to="/register" className='w-100 mt-3 p-2 mb-3'>SIGN UP HERE</Link>
                        <Link to="/home" className='w-100 mt-3 p-2 mb-3'>dashboard</Link>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
