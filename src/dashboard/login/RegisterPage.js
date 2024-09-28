import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function RegisterPage() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const appNavigate = useNavigate();

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = () => {

        if (!userData.name || !userData.email || !userData.password) {
            // alert("Please fill all the details");
            toast.error("Please fill all the details");
        } else {
            const emailReGex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailReGex.test(userData.email)) {
                // alert("please provide valid email ID");
                toast.error("please provide valid email ID");
            } else {
                const existingdata = JSON.parse(localStorage.getItem("users")) || [];
                const existingUser = existingdata.some((user) => user.email === userData.email);
                if (existingUser) {
                    // alert("user already ergistered, please login!");
                    toast.error("user already ergistered, please login!");
                    // console.log(existingUser);
                } else {
                    existingdata.push(userData);
                    localStorage.setItem("users", JSON.stringify(existingdata));
                    console.log(existingUser);
                    // alert("registration successful");
                    toast.success("registration successful, redirecting to login page!");
                    setTimeout(() => {
                        appNavigate("/");
                    }, 4000);
                }
            }
        }
    };

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12 strip'></div>
                </div>
                <div className='row justify-content-center mt-5'>
                    <div className='col-lg-4 col-md-5 col-sm-6 col-10 border shadow p-5 rounded-3 mt-5'>
                        <h2 className='text-center'>REGISTER FORM</h2>
                        <hr />
                        <label className='form-label'>Name</label>
                        <input type="text" className='form-control mb-2' name='name' onChange={handleChange} />
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control mb-2' name='email' onChange={handleChange} />
                        <label className='form-label'>Create Password</label>
                        <input type="password" className='form-control mb-2' name='password' onChange={handleChange} />
                        <button className='btn btn-warning w-100 mt-2 p-2' onClick={handleSubmit}>REGISTER HERE</button>
                        <label className='text-end mt-2'>Forgot Password?</label>
                        <Link to="/" className=' w-100 mt-3 p-2 mb-3'>SIGN IN HERE</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Fragment>
    );
}

export default RegisterPage;
