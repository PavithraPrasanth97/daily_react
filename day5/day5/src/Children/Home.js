import React, {useContext} from 'react'
import Usercontext from './MainRouting'

export const Home = () => {
    const {name} = useContext(Usercontext)
  return (
    <div>Home {name}</div>
  )
}
