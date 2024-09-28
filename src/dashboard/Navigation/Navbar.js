import React, { Fragment } from 'react';
import { FaBusAlt } from "react-icons/fa";
import LoginModal from '../login/LoginModal';

function Navbar() {
    return (
        <Fragment>
            <div className='navbar'>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    LOGIN
                </button>
            </div>
            <LoginModal />
        </Fragment>
    )
}

export default Navbar