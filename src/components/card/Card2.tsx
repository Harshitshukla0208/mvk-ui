import * as React from 'react';
import { ReactNode } from 'react';
import '../styles/card1.css';

interface CardProps {
    image?: string;
    title: string;
    text: string;
    textColor?: string;
    text_on_btn: ReactNode;
    onClick?: () => void;
}

const Card2: React.FC<CardProps> = ({ image, title, text, textColor, text_on_btn, onClick  }) => {
    return (
        <div className="card">
            <img className="card-image" src={image} alt="profile" />
            <h2 className="card-title" style={{ color: textColor }}>{title}</h2>
            <p className="card-text" style={{ color: textColor }}>{text}</p>
            <button className="contact-btn" onClick={onClick}>{text_on_btn}</button>
        </div>
    );
};

export {Card2};
