import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {
    const param = useParams();
    const {productId} = useParams();
  return (
    <div>its Param <br></br>
        {param.meetId}
        new param <br></br>
        {productId}

    </div>
  )
}

export default Param