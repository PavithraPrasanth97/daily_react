import React, { useContext } from 'react'
import { Child3 } from './Child3'
import Context from './Context'


export const Child2 = () => {
    const{value}=useContext(Context)
  return (
    <div>Children2
        <h1>{value}</h1>
        <Child3/>
    </div>
  )
}