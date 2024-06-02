import * as React from 'react';
import { FC } from 'react';
import './css/searchbar1.css';

interface SearchBarProps {
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    textColor?: string;
    backgroundColor?: string;
    width?: string;
}

const SearchBar1: FC<SearchBarProps> = ({ 
    placeholder = "Search...", 
    value, 
    onChange, 
    onSearch, 
    textColor = "#000", 
    backgroundColor = "#fff",
    width = "100%"
}) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div 
            className="search-bar" 
            style={{ 
                '--text-color': textColor,
                '--background-color': backgroundColor,
                '--width': width
            } as React.CSSProperties}
        >
            <input 
                type="text" 
                className="search-input" 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                onKeyDown={handleKeyDown} 
            />
            <button 
                className="search-button" 
                onClick={onSearch}
            >
                <span className="material-symbols-outlined search-icon">
                    search
                </span>
            </button>
        </div>
    );
};

export { SearchBar1 };
