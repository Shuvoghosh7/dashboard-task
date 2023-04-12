import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import { FiShoppingBag } from 'react-icons/fi';
import './Navbar.css'
const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const { pathname } = useLocation()
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            {pathname.includes('dashboard') && <label for="my-drawer-2" class="btn btn-ghost btn-circle drawer-button lg:hidden">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>

            </label>}

            <ul className={active}>
                <li className="nav__item ml-3">
                    <Link to='/' className="nav__link">Project</Link>
                </li>
                <li className="nav__item">
                    <Link to='/about' className="nav__link">Client</Link>
                </li>
                <li className="nav__item">
                    <Link to='/dashboard/allproduct' className="nav__link">User</Link>
                </li>
                <li className="nav__item">
                    <Link to='/cake-request' className="nav__link">Account </Link>
                </li>
                <li className="nav__item">
                    <Link to='/blogs' className="nav__link">Schedule</Link>
                </li>
                <li className="nav__item">
                    <Link to='/blog' className="nav__link">Lead</Link>
                </li>
                <li className="nav__item">
                    <Link to='/dashboard/all-products' className="nav__link">Attendance</Link>
                </li>
                <li className="nav__item">
                    <Link to='/singin' className="nav__link">Humen Resource </Link>
                </li>
                <li className="nav__item">
                    <Link to='/sing-up' className="nav__link">Leave </Link>
                </li>
                <li className="nav__item">
                    <Link to='/sing-up' className="nav__link">Payroll </Link>
                </li>
            </ul>
            <div class="dropdown dropdown-bottom dropdown-end">
                <label tabindex="0" class=" bg-transparent">
                    <div class="avatar mr-5">
                        <div class="w-12 rounded-full">
                            <img src="https://png.pngtree.com/element_our/png/20181208/male-student-icon-png_265268.jpg" />
                        </div>
                    </div>
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    
                        <div>
                            <p>Jacob Jones</p> 
                            <p>sdjsdffg</p>
                        </div>
                        <div>
                            <p>sfskdsd</p>
                        </div>

                 
                    
                </ul>
            </div>


            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Navbar;