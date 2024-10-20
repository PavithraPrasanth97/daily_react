import React, {createContext} from 'react'
const Usercontext = createContext();
export default Usercontext

export const MainRouting = ({children}) => {
    const name = 'Good Morning Children';
  return (
    <div>
 <Usercontext.Provider value = {{name}}>
    {children}
 </Usercontext.Provider>
    </div>
  )
}




