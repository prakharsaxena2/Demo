import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import SecondPage from './components/SecondPage'


function App() {
  return (
    <div className="App">
     {/* <Greet  name="Bruce" superHero="Batman">
     <p>This is children props</p>
     </Greet>
     <Greet  name="Charls" superHero="Superman">
     <button>Action</button>
     </Greet>
     <Greet  name="Diana" superHero="WonderWomen"/>



     <Welcome name="Bruce" superHero="Batman">
     <p>This is children props</p> 
     </Welcome>
     <Welcome name="Charls" superHero="Superman"></Welcome>
     <Welcome name="Diana" superHero="WonderWomen"></Welcome> */}
    
     {/* <Hello /> */}
    {/* <Message></Message>  */}
    {/* <Counter></Counter> */}
    {/* <EventBind></EventBind> */}
    {/* <ParentComponent /> */}
    {/* <UserGreeting /> */}
    {/* <NameList /> */}
    <SecondPage />
    </div>
  );
}

export default App;
