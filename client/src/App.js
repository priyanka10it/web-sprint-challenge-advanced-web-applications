import React, { useState } from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import PrivateRoute from './components/utils/PrivateRoute';
import BubblePage from './components/BubblePage';
import Header from './components/Header';
import Login from "./components/Login";
import Contact from './components/Contact';
import "./components/App.css";

import AddColor from "./components/AddColor";

function App() {
  return (
    
      <div className="App">
          
        <Router>
        <Header/>  
      <Switch>
        <PrivateRoute exact path="/BubblePage" component={BubblePage}/>
        <PrivateRoute exact path="/AddColor" component={AddColor}/>
        <PrivateRoute exact path="/Contact" component={Contact} />
        <Route exact path="/login" component={Login} />
       
        </Switch>
        </Router>
        
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    
  );
}

export default App;
