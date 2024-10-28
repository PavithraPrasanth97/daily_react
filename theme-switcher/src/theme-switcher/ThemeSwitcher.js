import React, { useState } from 'react'
import './ThemeSwitcher.css'

const ThemeSwitcher = () => {
    const [theme,setTheme]=useState('light');
    const toggleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
  return (
    <div className={theme}>
       <h1>{theme.charAt(0).toUpperCase()+theme.slice(1)} Theme</h1>
       <button onClick ={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
       </button>
    </div>
  )
}

export default ThemeSwitcher