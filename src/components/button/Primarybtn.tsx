import * as React from 'react';
import { ReactNode } from 'react';
import './css/primarybtn.css';

type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};

const Primarybtn = ({ children, onClick }: PropsType) => {
    return (
        <button className="primary-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export { Primarybtn };
