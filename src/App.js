import React from "react";
import './App.css';
import Header from "./Components/Header/Header";

import Main from "./Components/Main/Main";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import Nav from "./Components/Nav/Nav";
import KnowledgeBase from "./Components/Main/KnowlegeBase/KnowledgeBase";
import Messages from "./Components/Main/Messages/Messages";

function App(props) {
  return (
    <div className="App">
      <Header forHeader={props.state}/>
      <Nav forNav={props.state}/>
      <Main forMain={props.state}>
        <Routes>
          <Route path='/home' element={<Home forHome={props.state}/>}/>
            <Route path='*' element={<Home forHome={props.state}/>}/>
          <Route path='social-network/' element={<Home forHome={props.state}/>}/>
          <Route path='/knowledge-base/*' element={<KnowledgeBase forKnowledgeBase={props.state}/>}/>
            <Route path="/messages/*" element={<Messages forMessages={props.state}/>}/>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
