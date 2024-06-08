import * as React from 'react';
import { FC } from 'react'
import '../styles/footerdark.css';

interface FooterProps {
    text: string;
    links?: { label: string; url: string }[];
    backgroundColor?: string;
    textColor?: string;
}

const FooterDark: FC<FooterProps> = ({
    text,
    links = [],
    backgroundColor = '#333',
    textColor = '#fff'
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

export {FooterDark};
