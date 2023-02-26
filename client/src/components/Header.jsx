import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import { getToken } from "../services/LocalStorageServices";
import './header.css';

const Header =() => {
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();
    useEffect(()=> {
        if (location.pathname === '/'){
            setActiveTab("Home")
        }
        else if (location.pathname === '/add'){
            setActiveTab("AddUser")
        }
        else if (location.pathname === '/about'){
            setActiveTab("About")
        }
    }, [location])

    const token = getToken('token')

    return (
        <div className="header">
            <p className="logo">Education Management System</p>
            <div className="header-right">
                <Link to='/'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={()=> setActiveTab("Home")}>Home</p>
                </Link>
                <Link to='/add'>
                    <p className={`${activeTab === "AddUser" ? "active" : ""}`} onClick={()=> setActiveTab("AddUser")}>Add User</p>
                </Link>
                <Link to='/about'>
                    <p className={`${activeTab === "About" ? "active" : ""}`} onClick={()=> setActiveTab("About")}>About</p>
                </Link>
                {token ? <Link to='/profile'>
                    <p className={`${activeTab === "Profile" ? "active" : ""}`} onClick={()=> setActiveTab("Profile")}>Profile</p>
                </Link> : <><Link to='/register'>
                    <p className={`${activeTab === "Register" ? "active" : ""}`} onClick={()=> setActiveTab("Register")}>Register</p>
                </Link>
                <Link to='/login'>
                    <p className={`${activeTab === "Login" ? "active" : ""}`} onClick={()=> setActiveTab("Login")}>Login</p>
                </Link></>}
                
                
            </div>

        </div>
    )

}

export default Header;
