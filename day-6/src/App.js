import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react';

const initialState = {
  user: {name:"Pavithra", id:1},
  task: [{name:"Task1",id:1}]
}

const reducerFunc = (currentState,action) => {
  switch(action.type){
    case "ADD":
      return {
        ...currentState,task:[...currentState.task,{name:action.payload.name,id:action.payload.id}],
      };
    case "DELETE":
      return {
        ...currentState,task:currentState.task.filter(task => task.id != action.payload),
      };
      default:
        return currentState;
  }
}

function App() {
  const[typedValue,setTypedValue] = useState("");
   const [taskState, taskDispatch] = useReducer(reducerFunc , initialState);
   function handleAdd() {
    taskDispatch ({
      type:"ADD",
      payload: {name: typedValue, id: Date.now()},
    });
    setTypedValue("");
   }
   function handleDelete(id) {
    taskDispatch ({
      type: "DELETE",
      payload:id,
    });
   }
  return (
    <>
    <h1>useReducer Task</h1>
    <p>Hi...{taskState.user.name}</p>
    <input type="text" value={typedValue} onChange={(e)=>{setTypedValue(e.target.value)}}></input>
    <button onClick={handleAdd}>ADD</button>
    <h3>Tasks : </h3>
    {taskState.task.map((val) => (
      <>
      {" "}
      <li key={val.id}>{val.name}</li>
      <button onClick={() => {
        handleDelete(val.id)
      }}> DELETE</button>
      </>
    ))}
    
    </>
  );
}

export default App;
