import React, { useState } from 'react';
import './Navbar.css';
import { HiLogout, HiMenu, HiUserCircle } from 'react-icons/hi';
import { useUser } from 'lib/context/UserContext';
import { auth } from 'lib/firebase';

const NavLink = ({ icon, onClick }) => {
    return (
        <div onClick={onClick} className="navbar__menu-item">
            {icon}
        </div>
    );
};

const Navbar = () => {
    const [show, setShow] = useState(false);

    const { authUser } = useUser();

    const toggle = () => {
        setShow(!show);
    };

    return (
        <div className="navbar">
            <div className="navbar__container">
                <a href="/" className="navbar__brand">
                    <img
                        className="navbar__logo"
                        src="https://play-lh.googleusercontent.com/fp2fWr8zLoAwPYdkyq0Hd1cAwU34bQfEM4l8iY8DIykirSTE5jB5A006TbLXzft2Rw"
                        alt="logo"
                    />
                </a>

                {authUser && (
                    <>
                        <div className="navbar__menu__toggle" onClick={toggle}>
                            <HiMenu />
                        </div>

                        <div className="navbar__menu">
                            <NavLink icon={<HiUserCircle />} />
                            <NavLink
                                onClick={() => auth.signOut()}
                                icon={<HiLogout />}
                            />
                        </div>
                    </>
                )}
            </div>

            <div className={`navbar__mobile ${show ? 'show' : ''}`}>
                {authUser && (
                    <>
                        <a href="/" className="navbar__menu-item">
                            <HiUserCircle /> Account
                        </a>
                        <a href="/" className="navbar__menu-item">
                            <HiLogout /> Logout
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
