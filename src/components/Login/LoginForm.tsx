import * as React from 'react';
import { FC, FormEvent, useState } from 'react'
import {Input1} from '../input/Input1';
import './css/loginform.css';

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    emailLabel?: string;
    passwordLabel?: string;
    buttonText?: string;
}

const LoginForm: FC<LoginFormProps> = ({
    onSubmit,
    emailPlaceholder = 'Enter your email',
    passwordPlaceholder = 'Enter your password',
    emailLabel = 'Email',
    passwordLabel = 'Password',
    buttonText = 'Login'
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Login</h2>
            <Input1 
                label={emailLabel} 
                type="email" 
                placeholder={emailPlaceholder} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <Input1 
                label={passwordLabel} 
                type="password" 
                placeholder={passwordPlaceholder} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit" className="login-form-button">{buttonText}</button>
        </form>
    );
};
export {LoginForm};
