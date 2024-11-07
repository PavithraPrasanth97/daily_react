import React from 'react'
import Product from "./Product"


const productsData = [
    {image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqKlHyEBbrHsJ82r2kFMj0_gXKubBfJaRusMVVXakgpsc4wqBX4OpeIRPb95BDDv9eDVW72lArfY1TR27oyWmsx2vzcq42j9WW9nS7ij-ms3LifuGT3zuJ0w' , title:'SanDisk Ultra USB 3.0 Flash Drive', price: '₹299',id:1},
    {image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFXNG8VYHPpSsBFahRChgZp8psNukcY9-RmBKkSTSdf3DFc-TODcH807TCc7tB86q82JkYTiwXd2cUdQHID5uAsAhCKObg_bbJUibvVRfryOvwTmgDEpjZSVVFTzRrimQSXJ9xTZAUYBY&usqp=CAc' , title:'Sony MDR-EX155AP Wired In-Ear Headphones', price: '₹1161',id:2},
    {image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9XenYZcRSsGnjkjtwwt6ZwtnEPYJx4NEw6o880u51WRc8L8dlaYex6LjoyXWo403yAh2rwPffD1dCjLEYsFSKCck0rDvnqJooMtE7OpN9f0eJXorQQGQs0tg_prJXkEOUCxaJFGsnywE&usqp=CAc' , title:'Sony WF-C510 Truly Wireless headphone', price: '₹4990',id:3},
    {image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIWxZUziu0jpSGT9uOnTD2k37Y7dwfde4E6ycdUpxsVVlKwVXUi0b7i9_nIo0ZQaLjodUUdB36SFlEcLw2BX4l8GFlbXmRStT3-vvwgKctxt3hmu4MdjAq0uzwaGbh5LmZwWvoUQ&usqp=CAc' , title:'Portronics Clamp M2 adjustable Mobile Phone Holder', price: '₹304',id:4},
    {image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRpwQLIpWs_mrqNhSEkcLyoAlR-dV-yjDYCOW0zLLnPI84T4eMXeiyRCOQU-I0GEn9cg747-e5aM94jyXpYH8q29VymntPU_uxLRtJoakFGsJcxittCj7Frjb37qoR0ITvaTiJwBbzWvc&usqp=CAc' , title:'500 GB Portable External Hard Disk Drive - 500Gb', price: '₹1675',id:5},    
    {image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpmKrbYBuZhdauJkaY8aScVmUgJZpbm1xqZ3SUmtGut3ZbwEDGHeXuX3pHgnC-ByjUmktlMhw5XN02xBX_zDI26D3y6_CkZmJZRZU9kT0WgmqEPT5jaVUa&usqp=CAc' , title:'Apple 20W USB-C Power cable'
, price: '₹1900',id:6},    
    {image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJbi5ZGnb9VMqSST7h77IPzU5O8INSUJq95CdoMCmsuNw671-nUJKpJ18CfJvoS35V6LejHghPpST74PLA9wnOoRcI_wZEknKeEmS4B8g&usqp=CAc' , title:'Boat Immortal 121 with Beast Mode40ms airpods', price: '₹1699',id:7},   
    {image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjTtd7FK_nfEIMuIab45wpCz0JAgBQwd85MZIuKtfY4AGayTcFTpjtN7DRLhr1Xqo3vCd1Oy4gZx1xcU7cq3t40iiE3PE3MgumQfDZ7XKGXIY9QhqNGl0PJQ' , title:'Honeywell 7-in-1 Type C Docking Station', price: '₹2534',id:8},
    
]

const Productcart = ({addToCart}) => {
  return (
    <div className='product-grid'>
        {productsData.map((product,index)=>(
            <Product
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            addToCart={addToCart}
           
            />

        ))}

    </div> 
  )
}

export default Productcart