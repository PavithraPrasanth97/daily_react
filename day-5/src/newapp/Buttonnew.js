import React from 'react'

const Buttonnew = ({ text, func, disable }) => {
  return (
    <div>
          <button onClick={func} disabled={disable}>
      {text}
    </button>
    </div>
  )
}

export default Buttonnew