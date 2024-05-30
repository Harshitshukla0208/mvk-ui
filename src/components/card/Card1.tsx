import * as React from 'react';
import './css/card1.css';

interface CardProps {
    image?: string;
    title: string;
    text: string;
    textColor?: string;
}

const Card1: React.FC<CardProps> = ({ image, title, text, textColor }) => {
    return (
        <div className="card">
            <img className="card-image" src={image} alt="profile" />
            <h2 className="card-title" style={{ color: textColor }}>{title}</h2>
            <p className="card-text" style={{ color: textColor }}>{text}</p>
        </div>
    );
};

export {Card1};
