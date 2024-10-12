import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {  Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


function App(props) {
  return (
      <div className="app">
        <Header />
        <Navbar />
        <div className='app-content'>   
          <Routes>
            <Route path="/dialogs"
              element={<DialogsContainer/>} /> 
            <Route path="/profile"
              element={<Profile  />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;

