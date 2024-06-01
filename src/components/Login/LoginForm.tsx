import * as React from 'react';
import { FC, FormEvent, useState } from 'react';
import { Input1 } from '../input/Input1';
import './css/loginform.css';

interface LoginFormProps {
    onSubmit: (username: string, email: string, password: string) => void;
    usernamePlaceholder?: string;
    emailPlaceholder?: string;
    passwordPlaceholder?: string;
    usernameLabel?: string;
    emailLabel?: string;
    passwordLabel?: string;
    buttonText?: string;
}

const LoginForm: FC<LoginFormProps> = ({
    onSubmit,
    usernamePlaceholder = 'Enter your username',
    emailPlaceholder = 'Enter your email',
    passwordPlaceholder = 'Enter your password',
    usernameLabel = 'Username',
    emailLabel = 'Email',
    passwordLabel = 'Password',
    buttonText = 'Login'
}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(username, email, password);
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
