import React from 'react';
import { useTheme } from './Context';
import './ContextThemeSwitcher.css';


const ContextThemeSwitcher = () =>{
    const { theme, toggleTheme } = useTheme();
    return (
        <div className='theme-switcher'>
            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
            {/* <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button> */}
            <label className="toggle">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ContextThemeSwitcher