import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './context-theme-switcher/Context';
import ContextThemeSwitcher from './context-theme-switcher/ContextThemeSwitcher';
// import ThemeSwitcher from './theme-switcher/ThemeSwitcher';


function App() {
  return (
    <div>
     {/* <ThemeSwitcher/> */}
     <ContextProvider>
       <ContextThemeSwitcher/>
     </ContextProvider>
    </div>
  );
}

export default App;
