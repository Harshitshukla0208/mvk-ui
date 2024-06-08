import * as React from 'react';
import { ReactNode } from 'react';
import '../styles/primarybtn.css';

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
