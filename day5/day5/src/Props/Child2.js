import React from 'react'
import { Child3 } from './Child3'

export const Child2 = ({value}) => {
  return (
    <div>Child2

        <Child3 value={value}/>
    </div>
  )
}