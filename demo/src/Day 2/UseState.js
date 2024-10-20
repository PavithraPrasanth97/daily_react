import React, { useState } from 'react'

export const UseState = () => {
    const [Value, setValue] = useState(1);
    const increment = () => {
        setValue(Value+1);
    }
    const decrement = () => {
        setValue(Value-1);
    }
  return (
    <div>
        {Value}
        <button onClick = {()=>increment()}>Increment</button>
        <button onClick = {()=>decrement()}>Decrement</button>
    </div>
  );
};

// export default UseState