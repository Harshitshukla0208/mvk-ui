import * as React from 'react';
import { ReactNode } from 'react';
import './css/secondarybtn.css';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

const Secondarybtn = ({ children, onClick }: ButtonProps) => {
    return (
        <button className="secondary-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export { Secondarybtn };
