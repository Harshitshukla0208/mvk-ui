import * as React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
    backgroundColor?: string;
    textColor?: string;
};

const Secondarybtn = ({ children, onClick, backgroundColor = '#242424', textColor = '#FFFFFF' }: ButtonProps) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: backgroundColor,
        color: textColor,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.4s ease, color 0.4s ease, border 0.4s ease, transform 0.2s ease', // Added transform transition
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'gray';
        e.currentTarget.style.color = 'black';
        e.currentTarget.style.border = '1px solid black';
        e.currentTarget.style.transform = 'translateY(-2px)'; // Move button slightly upward on hover
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
        e.currentTarget.style.color = textColor;
        e.currentTarget.style.border = 'none';
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

export { Secondarybtn };
