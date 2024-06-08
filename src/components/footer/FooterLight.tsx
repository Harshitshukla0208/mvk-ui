import * as React from 'react';
import { FC } from 'react'
import '../styles/footerlight.css';

interface FooterProps {
    text: string;
    links?: { label: string; url: string }[];
    backgroundColor?: string;
    textColor?: string;
}

const FooterLight: FC<FooterProps> = ({
    text,
    links = [],
    backgroundColor = '#fff',
    textColor = '#333'
}) => {
    return (
        <footer className="footer" style={{ backgroundColor, color: textColor }}>
        <div className="footer-content">
            <p className="footer-text">{text}</p>
            <ul className="footer-links">
            {links.map((link, index) => (
                <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>
                    {link.label}
                </a>
                </li>
            ))}
            </ul>
        </div>
        </footer>
    );
};

export {FooterLight};
