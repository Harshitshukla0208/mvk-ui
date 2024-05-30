import * as React from 'react';
import { useState } from 'react';
import './navcss/nav1.css';

type NavbarProps = {
    brand?: string;
    links: { name: string; href: string }[];
    backgroundColor?: string;
    textColor?: string;
};

const Navbar1 = ({ brand = "MVK-UI", links, backgroundColor = "transparent", textColor = "black" }: NavbarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar" style={{ backgroundColor, color: textColor }}>
            <div className="navbar-brand">{brand}</div>
            <button className="navbar-toggle" onClick={toggleMenu}>
            ☰
            </button>
            <ul className={`navbar-links ${menuOpen ? 'active' : 'inactive'}`}>
            {links.map((link, index) => (
                <li key={index}>
                <a href={link.href} style={{ color: textColor }}>
                    {link.name}
                </a>
                </li>
            ))}
            </ul>
        </nav>
    );
};

export { Navbar1 };
