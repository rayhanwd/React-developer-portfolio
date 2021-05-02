import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
