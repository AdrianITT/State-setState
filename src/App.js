import React,{Componente} from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./orden/Header";
import Fooder from "./orden/Fooder";
import Body from "./orden/Body";



function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Fooder
      pie={<p>Copyright &copy; Todos los derechos reservados </p>}
      />
    </div>
  );
}

export default App;
