import React, { Component } from "react";
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PortfolioDetail from "./portfolio/portfolio-detail";




export default class App extends Component {
  render() {
    return (
      <div className="app">
       

        <Router>
        <div>
        <h1>Chris Adams' Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>

        <NavigationContainer />
        <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/about-me" component={About} />
           <Route path="/Contact" component={Contact} />
           <Route path="/Blog" component={Blog} />
           <Route path="/portfolio/:slug" component={PortfolioDetail} />
        </Switch>
        </div>
        </Router>


     
        
      </div>
    );
  }
}