import React from 'react';
import LoginButton from '../LoginButton';
import './LoginContainer.css';

const LoginContainer = () => {
    return (
        <div className="login__container">
            <div className="login__container__title">
                <h1>Simple Weather by Avery Herring 🌤</h1>
            </div>
            <LoginButton />
        </div>
    );
};

export default LoginContainer;
