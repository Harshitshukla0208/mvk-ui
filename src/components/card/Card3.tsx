import * as React from 'react';
import { ReactNode } from 'react';
import '../styles/card3.css';

interface CardProps {
    image?: string;
    title: string;
    product_price: string;
    text: string;
    text_on_btn: ReactNode;
    onClick?: () => void;
    textColor?: string; // New prop for text color
}

const Card3: React.FC<CardProps> = ({ image, title, product_price, text, text_on_btn, onClick, textColor }) => {
    return (
        <div className="card">
            <img className="card-image" src={image} alt="profile" />
            <h2 className="card-title" style={{ color: textColor }}>{title}</h2>
            <p className='price' style={{ color: textColor }}>{product_price}</p>
            <p className="card-text" style={{ color: textColor }}>{text}</p>
            <button className="contact-btn" onClick={onClick} style={{ color: textColor }}>{text_on_btn}</button>
        </div>
    );
};

export { Card3 };
