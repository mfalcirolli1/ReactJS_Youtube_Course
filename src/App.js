import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './Components/greet'       // import <name> can be changed
import { Greets } from './Components/greet'  // import { <name> } cannot be changed
import { Test } from './Components/greet'
import Welcome from './Components/welcome'
import Hello, { Hellow } from './Components/hello'
import Message from './Components/message'
import Counter from './Components/counter'
import FunctionClick from  './Components/functionclick'
import ClassClick from './Components/classclick'
import EventBind from './Components/eventbind'
import ParentComponent from './Components/parentcomponent'

function App() {
  return (
    <div className="App">

      <FunctionClick></FunctionClick>

      <ClassClick></ClassClick>

      <EventBind></EventBind>

      <ParentComponent></ParentComponent>

      <Greet name ='Joice' order='First'> <p>Child</p> </Greet>
      <Greet name ='Duarte' order='Second'> <button>Action</button> </Greet>
      <Greet name ='da Silva' order='Third'></Greet>

      <Welcome name ='Matheus' order='First'></Welcome>
      <Welcome name ='Santos' order='Second'></Welcome>
      <Welcome name ='Falcirolli' order='Third'></Welcome>

      <Message></Message>

      <Counter></Counter>

      <Greets></Greets>
      <Test name='Teste'/>
      <Hello></Hello>
      <Hellow></Hellow>
    
    </div>
  );
}

export default App;
