import React from 'react'

export const Child = ({name,message}) => {
  return (
    <div>
        <h1>{name}</h1>
        {message}
    </div>
  )
}
