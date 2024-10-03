import React, { Fragment } from 'react';
import { FaBusAlt } from "react-icons/fa";
import LoginModal from '../login/LoginModal';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const appNavigate = useNavigate();

    const myItems = useSelector((state) => state.myFoodCart.items);
    console.log(myItems);

    const handleCheckout = () => {
        appNavigate("/home/checkout");
    }

    return (
        <Fragment>
            <div className='navbar'>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <button type="button" className="btn btn-primary position-relative me-5" onClick={handleCheckout}>
                    My Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {myItems.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
            <LoginModal />
        </Fragment>
    )
}

export default Navbar