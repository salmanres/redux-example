import React, { Fragment, useEffect, useState } from 'react';
import Navbar from './Navigation/Navbar';
import Sidebar from './Navigation/Sidebar';
import { Outlet } from 'react-router-dom';

function LandingPage() {

    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowBanner(false);
        }, 3000)
    }, []);

    const handleBannerClose = () => {
        setShowBanner(false);
    };

    return (
        <Fragment>
            <Navbar />
            <div className='container-fluid g-0'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 sidebar'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                        <Outlet />
                    </div>
                </div>
            </div>

            {showBanner && (
                <div className='banner'>
                    <h1>offer here</h1>
                    <button onClick={handleBannerClose}>X</button>
                </div>
            )}
        </Fragment>
    );
}

export default LandingPage;
