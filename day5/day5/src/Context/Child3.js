import React, { useContext } from 'react'
import Context from './Context'

export const Child3 = () => {
const{value}=useContext(Context)
  return (
    <div>Children3
        <h1>{value}</h1>
 
    </div>
  )
}