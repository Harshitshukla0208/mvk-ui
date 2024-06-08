import * as React from 'react';
import { FC, useState } from 'react'
import '../styles/selector.css';

interface DropdownOption {
    label: string;
    value: string;
}

interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    onSelect: (value: string) => void;
}

const Selector: FC<DropdownProps> = ({ options, placeholder = 'Select...', onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<DropdownOption | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option: DropdownOption) => {
        setSelected(option);
        onSelect(option.value);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
            {selected ? selected.label : placeholder}
            <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
            </div>
            <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
            {options.map((option, index) => (
                <li
                key={index}
                className="dropdown-list-item"
                onClick={() => handleSelect(option)}
                >
                {option.label}
                </li>
            ))}
            </ul>
        </div>
    );
};

export {Selector};
