import React from 'react'
import { Child2 } from './Child2'

export const Child1 = () => {
    const value="good morninng"
  return (
    <div>        
        <Child2 value={value}/>
    </div>
  )
}