import * as React from 'react';
import { FC, FormEvent, useState } from "react"
import { Input1 } from '../input/Input1';
import './css/loginform.css';

interface LoginFormProps {
    onSubmit: (email: string, password: string, username: string) => void;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    usernamePlaceholder?: string;
    emailLabel?: string;
    passwordLabel?: string;
    usernameLabel?: string;
    buttonText?: string;
}

const LoginForm: FC<LoginFormProps> = ({
    onSubmit,
    emailPlaceholder = 'Enter your email',
    passwordPlaceholder = 'Enter your password',
    usernamePlaceholder = 'Enter your username',
    emailLabel = 'Email',
    passwordLabel = 'Password',
    usernameLabel = 'Username',
    buttonText = 'Login'
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(email, password, username);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Login</h2>
            <Input1
                label={usernameLabel}
                type="text"
                placeholder={usernamePlaceholder}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
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

export { LoginForm };
