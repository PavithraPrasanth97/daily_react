import React, { useState } from 'react'

const StateComponent = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [boo,setBoo] = useState(false);
    // const [list, setList] = useState([
    //     { frt: "apple", id: "a" },
    //     { frt: "banana", id: "b" },
    //   ]);
    const [list, setList] = useState(
          ['apple','banana']);
    
    
    function increment(){
        setCount(count => count+1);
    }

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick = {increment}>Increment</button>
        <br></br>
        <br></br>
        <label htmlFor='name'>Name : </label>
        <input
        type="text"
        name="name"
        onChange = {(e) => setName(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor='location'>Location : </label>
        <input
        type="text"
        name="location"
        onChange = {(e) => setLocation(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        <button onClick= {() => setBoo(true)}>Submit</button>
        <br></br>
        <br></br>
        <p>Details:</p>
        <>
        {name}
        {location}
        </>
        {/* {boo ? (
            <>
            <p>{name}</p>
            <p>{location}</p>
            </>
        ):("Wrong Entry ")} */}
        {/* <ul>
            {list.map((val) => (
                <li key={val.id}>{val.frt}</li>
            ))}
        </ul> */}
          <ul>
            {list.map((val) => (
                <li>{val}</li>
            ))}
        </ul>
        

    </div>
  )
}

export default StateComponent