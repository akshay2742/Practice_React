import React from 'react';
import './App.css';
import Demo from './components/demo';
import Welcome from './components/greet';
import Message from './components/message'
import Counter from './components/counter';
import Formdata from './components/Formdata';
import CheckButton from './components/ButtonClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComp from './components/ParentComp';
import UserGreeting from './components/UserGreeting';
import LoginForm from './components/LoginForm';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import TableParent from './components/TableParent';
import LifecycleA from './components/LifecycleA';
import PureComp from './components/PureComp';
import ParentRegComp from './components/ParentRegComp';
import RefDemo from './components/RefDemo';

function App() {

  return (
    <div className="App">
      {/* <Message />
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

     <CheckButton />
     <ClassClick />
     <EventBind />
     <ParentComp />
     <UserGreeting>
     </UserGreeting>
     <LoginForm />
     <NameList />
     <StyleSheet className={true}/> */}
     {/* <Form />
     <TableParent /> */}
     {/* <LifecycleA /> */}
     {/* <PureComp />
     <ParentRegComp /> */}
     <RefDemo />
    </div>
  );
}



export default App;
