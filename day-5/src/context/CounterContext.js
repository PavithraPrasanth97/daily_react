import React, {createContext, useEffect, useState} from 'react'


const CounterContext = createContext({
    count: 0,
    increment: () =>{},
    decrement: () =>{},
});

export const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count +1);
    }
    function decrement() {
        setCount(count - 1);
    }
    useEffect(()=> {
        console.log("rendering effect");
    },[count]);
    return (
        <CounterContext.Provider value= {{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    );
};


export default CounterContext