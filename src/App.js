import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import {apiKey} from "./api";
import Weather from "./components/Weather";



function App() {
  return (
    <div className="wrapper">
        <div className="main">
            <Weather/>
        </div>


    </div>
  );
}

export default App;
