import * as React from 'react'
import { InputHTMLAttributes, FC } from 'react';
import '../styles/input1.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input1: FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="input-wrapper">
            {label && <label className="input-label">{label}</label>}
            <input className="styled-input" {...props} />
        </div>
    );
};

export {Input1};
