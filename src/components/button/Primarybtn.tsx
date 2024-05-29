import * as React from 'react';
import { ReactNode } from 'react';

type PropsType = {
    children: ReactNode;
    onClick?: () => void;
};

const Primarybtn = ({ children, onClick }: PropsType) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease', // Added transform transition
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#0056b3';
        e.currentTarget.style.transform = 'translateY(-2px)'; // Move button slightly upward on hover
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#007BFF';
        e.currentTarget.style.transform = 'translateY(0)'; // Reset transformation on mouse out
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

export { Primarybtn };
