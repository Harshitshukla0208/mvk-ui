import * as React from 'react';
import '../styles/iconbtn.css';

type PropsType = {
    onClick?: () => void;
    iconColor?: string; // New prop for text color
};

const Iconbtn = ({ onClick, iconColor = 'black' }: PropsType) => {
    return (
        <button className="styled-btn" onClick={onClick} style={{ color: iconColor }}>
            <span>{">"}</span>
        </button>
    );
};

export { Iconbtn };
