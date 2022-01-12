import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/demo';
import Welcome from './components/greet';
import Message from './components/message'
import Counter from './components/counter';
import Formdata from './components/Formdata';

function App() {
  return (
    <div className="App">
      <Message />
      <Counter />
      <Formdata />
     <Demo name="Akshay" institute="NIT Raipur">
       <p>I am learning React</p>
     </Demo>
     <Demo name="Aditya" institute="NIT Raipur">
       <button>Submit</button>
     </Demo>
     <Demo name="Ankit" institute="USCIT" />
     <Welcome name="Akshay" institute="USCIT">
       <p>I am Leaning React</p>
     </Welcome>
     <Welcome name="Aditya" institute="USCIT">
       <button>Submit</button>
     </Welcome>
     <Welcome name="Ankit" institute="USCIT"/>

    </div>
  );
}



export default App;
