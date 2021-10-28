import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authActions"

const Nav = (props) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    return (
        <div className="nav-strip">
            <Link to={"/order"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Order Form</label>
                </div>
            </Link>
            <Link to={"/view-orders"} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Orders</label>
                </div>
            </Link>
            <Link to={"/login"} onClick={() => dispatch(logoutUser())} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">Log Out</label>
                </div>
            </Link>
            {auth.email !== null &&
            <div className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">{auth.email}</label>
                </div>
            </div>
            }
        </div>
    );
}

export default Nav;