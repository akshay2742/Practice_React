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
import ParentInput from './components/ParentInput';
import ParentFRRef from './components/ParentFRRef';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCount from './components/ClickCount';
import HoverCount from './components/HoverCount';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderCounter from './components/RenderCounter';
import { UserProvider } from './components/userContext';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Weather from './components/Weather';
import HookCounter from './components_hooks/HookCounter';
import HookObject from './components_hooks/HookObject';
import HookArray from './components_hooks/HookArray';

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
     {/* <PureComp /> */}
     {/* <ParentRegComp />
     <RefDemo /> */}
     {/* <ParentInput /> */}
     {/* <ParentFRRef /> */}
     {/* <PortalDemo /> */}
     {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
     {/* <ClickCount name="Akshay" />
     <HoverCount /> */}
     <RenderCounter> 
      {(count,increaseCount) => <ClickCounterTwo count={count} increaseCount={increaseCount}></ClickCounterTwo>}
     </RenderCounter>
     <RenderCounter> 
      {(count,increaseCount) => <HoverCounterTwo count={count} increaseCount={increaseCount}></HoverCounterTwo>}
     </RenderCounter>
     <UserProvider value="Akshay">
       <ComponentD />
     </UserProvider>
     {/* <PostList />
     <PostForm /> */}
     <Weather />
     <HookCounter />
     <HookObject />
     <HookArray />
    </div>
  );
}



export default App;
