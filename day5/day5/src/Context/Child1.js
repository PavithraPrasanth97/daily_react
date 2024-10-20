import React from 'react'
import { Child2 } from './Child2'
import Context from './Context'

export const Child1 = () => {
    const value="Good Morning All"
  return (
    <div>Children1
        <h1>{value}</h1>
        <Context.Provider value={{value}}>
        <Child2/>
        </Context.Provider>

        
    </div>
  )
}