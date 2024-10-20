import logo from './logo.svg';
import './App.css';
import Style from './Day 2/Style'
import {UseState} from './Day 2/UseState';


// import Demo from './Day 1/Demo' //Default import
// import {Demo} from './Day1/Demo'  Named import

function App() {
  return (
    <div>
      <h1>My React App</h1>
      {/* <Demo/> */}
      <Style/>    
      <UseState/>

    
    </div>
  );
}

export default App;
