import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [theme,setTheme] = useState(() =>
    {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme :'light';
    });

    const toggleTheme = ()=>{
          const newTheme = theme === 'light' ? 'dark': 'light';
          setTheme(newTheme);
          localStorage.setItem('theme',newTheme);
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
        <Context.Provider value ={{theme , toggleTheme }}>
            {children}
        </Context.Provider>
    );    
};

export const useTheme = () =>{
    return useContext(Context);
}