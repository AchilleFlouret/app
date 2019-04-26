import React, { Component } from 'react';
import './App.css';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Accueil from "./components/Accueil";
import Destination from "./components/Destination";
import Situation from "./components/Situation";
import Budget from "./components/Budget";
import Erreur from "./components/Erreur";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

class App extends Component {
  render() {
  return (

    <BrowserRouter>
    <div>
    <Navigation />
    <Switch>

      <Route path="/" component={Accueil} exact />
      <Route path="/Home" component={Home} exact/>
      <Route path="/Home/destination" component={Destination} exact/>
      <Route path="/Home/situation" component={Situation} exact/>
      <Route path="/Home/budget" component={Budget} exact />
      <Route component={Erreur} />

      </Switch>
    </div>
    </BrowserRouter>

        );
  }

}

export default App;
