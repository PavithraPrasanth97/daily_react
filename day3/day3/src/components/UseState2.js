import React, {useState} from 'react'

const UseState2 = () => {
    const[open,setOpen]=useState(false);
  return (
      <div>
        <div>Hi Hello</div>
        <button onClick={() => setOpen(true)}>OPEN</button>
        <button onClick={()=>setOpen(false)}>CLOSE</button>

      {open&&(
        <>
        <div className='model'>          
            <div>Hi.....</div>
        </div>
        </>
      )}
      </div>
  )
}

export default UseState2