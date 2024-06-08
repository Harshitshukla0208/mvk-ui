import * as React from 'react';
import { ReactNode } from 'react';
import '../styles/dangerbtn.css';

type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};

const Dangerbtn = ({ children, onClick }: PropsType) => {
    return (
        <button className="danger-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export { Dangerbtn };
