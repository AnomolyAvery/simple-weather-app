import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleAuthProvider } from 'lib/firebase';
import './LoginButton.css';

const LoginButton = () => {
    const handleClick = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <button className="login__button" onClick={handleClick}>
            Login with Google.
        </button>
    );
};

export default LoginButton;
