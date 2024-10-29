import React, { useRef } from "react"
import './App.css';
import TaskModal from "./component/TaskModal";
import TaskTimer from "./component/TaskTimer";

function App() {
  const fileRef = useRef();
  const modalRef = useRef();

  function handleFile() {
    fileRef.current.click();
  }
  function handleShow(){
    modalRef.current.showModal();
}
  function handleClose() {
    modalRef.current.close();
}
  return (
    <div >
      <input type="file" ref={fileRef} style={{display:"none"}}></input>
      <button onClick = {handleFile}>Upload</button>

      {/* <dialog ref={modalRef}>
        <p> Something Work</p>
        <button onClick= {handleClose}>X</button>
      </dialog> */}
      {/* <modal ref={modalRef}>
        <p>Something</p>
        <button onClick={handleClose}>X</button>
      </modal> */}

     

      <TaskModal ref={modalRef}>
        <p>Do you want to delete?</p>
        <button>Delete</button>
        <button onClick={handleClose}>Close</button>
      </TaskModal>
      <button onClick={handleShow}>Show</button>
      <TaskTimer></TaskTimer>




    </div>
  );
}

export default App;
