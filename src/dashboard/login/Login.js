import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value.trim() 
        });
    };

    const handleSubmit = () => {
        const { email, password } = data;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert("Please fill all the fields");
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
        } else {
            const storedUserData = JSON.parse(localStorage.getItem("userData"));
            if (storedUserData) {
                // const parsedUserData = JSON.parse(storedUserData);
                if (storedUserData.email === email && storedUserData.password === password) {
                    setLoader(true);
                    setTimeout(() => {
                        setLoader(false);
                        alert("Login successful");
                        navigate('/'); 
                    }, 2000);
                } else {
                    alert("Invalid email or password");
                }
            } else {
                alert("No user data found. Please register first.");
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
                    <div className='col-lg-4 col-md-5 col-sm-6 col-10 border shadow p-3 rounded-3 mt-5'>
                        <h2 className='text-center'>LOGIN FORM</h2>
                        <hr />
                        <label className='form-label'>Email</label>
                        <input type="email" className='form-control mb-2' name='email' onChange={handleChange} required />
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control mb-2' name='password' onChange={handleChange} required />
                        <button className='btn btn-warning w-100 mt-2 p-2' onClick={handleSubmit} disabled={loader}>
                            {loader ? "Logging in..." : "LOGIN HERE"}
                        </button>
                        <label className='text-end mt-2'>Forgot Password?</label>
                        <Link to="/register" className='w-100 mt-3 p-2 mb-3'>SIGN UP HERE</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
