import React from 'react'

 const Style = () => {
    const textColor={
        backgroundColor:'black',
        color:'white'
    }
  return (
    <>
        <div>
           <Header/>
           <p style={textColor}>Hello</p>
           <Footer/>
        </div>
    </>
  )
}
export default Style



const Header = () => {
  return (
    <div>Header</div>
  )
}
const Footer = () => {
  return (
    <div>Footer</div>
  )
}



