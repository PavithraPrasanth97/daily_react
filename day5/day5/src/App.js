import logo from './logo.svg';
import './App.css';
// import { Header } from './Props/Header';
// import { Child1 } from './Context/Child1';
import { MainRouting } from './Children/MainRouting';
import { Home } from './Children/Home';
import { About } from './Children/About';



function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Child1/> */}

     <MainRouting>
      <Home/>
      <About/>
     </MainRouting>      
  
    </div>
  );
}

export default App;
