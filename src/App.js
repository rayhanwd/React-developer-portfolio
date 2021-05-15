import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path="/home">
          <Home></Home>
          </Route>
          <Route  path="/about">
         <About></About>
          </Route>
          <Route  path="/services">
         <Services></Services>
          </Route>
          <Route  path="/portfolio">
         <Portfolio></Portfolio>
          </Route>
          <Route  path="/news">
         <News></News>
          </Route>
          <Route  path="/contact">
         <Contact></Contact>
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
