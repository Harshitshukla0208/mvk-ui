import * as React from 'react';
import { ReactNode } from 'react';

type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};

const Button = ({ children, onClick }: PropsType) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#0056b3';
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#007BFF';
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {children}
        </button>
    );
};

export {Button};
