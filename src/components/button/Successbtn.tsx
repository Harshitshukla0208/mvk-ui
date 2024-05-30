import * as React from 'react';
import { ReactNode } from 'react';
import './css/successbtn.css';

type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};

const Successbtn = ({ children, onClick }: PropsType) => {
    return (
        <button className="success-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export { Successbtn };
