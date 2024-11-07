import React, { createContext, useState } from 'react'

const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);
    function handleLoginAuth() {
        setIsAuth(true);
    }
    function handleLogoutAuth () {
        setIsAuth(false);
    }

  return (
    <AuthContext.Provider value={{isAuth , handleLoginAuth, handleLogoutAuth}}>
        {children}
    </AuthContext.Provider>
        
  );
};

export default AuthContext