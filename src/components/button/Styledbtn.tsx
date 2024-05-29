import * as React from 'react';

type PropsType = {
    onClick?: () => void;
};

const Styledbtn = ({ onClick }: PropsType) => {
    const buttonStyle: React.CSSProperties = {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: 'transparent', // Change background color to black
        color: '#FFFFFF',
        border: '1px solid gray',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        display: 'flex', // Make button a flex container
        alignItems: 'center', // Center align items vertically
        justifyContent: 'center', // Center align items horizontally
    };

    const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#242424';
    };

    const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = 'transparent'; // Reset background color to black
    };

    return (
        <button
            onClick={onClick}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {/* Add icon element */}
            <span>{">"}</span>
        </button>
    );
};

export { Styledbtn };
