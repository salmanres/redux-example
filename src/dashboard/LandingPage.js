import React, { Fragment } from 'react'
import Navbar from './Navigation/Navbar'
import Sidebar from './Navigation/Sidebar'
import { Outlet } from 'react-router-dom'

function LandingPage() {
    return (
        <Fragment>
            <Navbar />
            <div className='container-fluid g-0'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-2 col-2 sidebar'>
                        <Sidebar />

                    </div>
                    <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                        <Outlet/>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LandingPage








// import React, { Fragment } from 'react'
// import Sidebar from './Navigation/Sidebar'
// import { Outlet } from 'react-router-dom'
// import Navbar from './Navigation/Navbar'

// function LandingPage() {
//     return (
//         <Fragment>
//             <Navbar/>
//
//         </Fragment>
//     )
// }

// export default LandingPage