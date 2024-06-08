import * as React from 'react';
import { FC, useState } from 'react'
import '../styles/nav1.css';

interface NavLink {
    label: string;
    url: string;
}

interface NavbarProps {
    brand: string;
    links: NavLink[];
    backgroundColor?: string;
    textColor?: string;
}

const Navbar1: FC<NavbarProps> = ({
    brand,
    links,
    backgroundColor = '#fff',
    textColor = '#333'
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" style={{ backgroundColor, color: textColor }}>
        <div className="navbar-brand">{brand}</div>
        <button className="navbar-toggle" onClick={toggleMenu} style={{color: textColor}}>
            ☰
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
            {links.map((link, index) => (
            <li key={index}>
                <a href={link.url} style={{ color: textColor }}>
                {link.label}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    );
};

export  {Navbar1};

