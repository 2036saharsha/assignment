import logo from './logo.svg';
import './App.css';
import Data from "./Data";
import React,{useState}from 'react';
import Button from './Button'

const contacts = [
  { id: 1, Name: "Saharsha Tiwari", PhoneNumber:78954632214 , Email: "info@saharsha.com.np"},
  { id: 2, Name: "KP Acharya", PhoneNumber:5164283497 , Email: "Kp@saharsha.com.np"},
  { id: 3, Name: "Victor Poudel" , PhoneNumber:2356497815, Email: "Victor@saharsha.com.np"},
  { id: 4, Name: "Tiwari Saharsha" , PhoneNumber:2465978124, Email: "Tiwari@saharsha.com.np"}
];
function App() {
  const [Number, setNumber] = useState(10,10)
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">List</h1>
            <h3>The Number is : {Number}</h3>
            <Button Number={Number} setNumber={setNumber}/>
          </header>
          <Data contacts={contacts} />
          
        </div>
    );
}

export default App;
