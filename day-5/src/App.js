import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
// import Counter from './newapp/Counter';
// import Buttonnew from './newapp/Buttonnew';
import {CounterProvider} from './context/CounterContext';
import Counter from './context/Counter';


function App() {
  // const[count,setCount] = useState(0);
  // function increment()
  // {
  //   setCount(count+1);
  // }
  // function decrement(){
  //   setCount(count-1);
  // }
  // useEffect(()=>{
  //   console.log("Rendering effects");
  // },[count])
  // return (
  //   <>
  //      <Counter data={count}>
  //         <Buttonnew text="Increment" func={increment} />
  //         <Buttonnew
  //         text="Decrement"
  //         func={decrement}
  //         disable={count < 1 ? true : false}
  //         />

  //      </Counter>
  //   </>
  // );
return (
  <>
  <CounterProvider>
  <Counter/>
  </CounterProvider>
  
  
  
  

  </>
)


}


export default App;
