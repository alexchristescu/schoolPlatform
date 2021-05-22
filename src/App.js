import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Main from "./Screens/Main";
import DetaliiCont from "./Screens/DetaliiCont";
import Proiect from "./Screens/Proiect";
import ClasaMaterie from "./Screens/ClasaMaterie";
import MainProf from "./Screens/MainProf";
import MaterieProf from "./Screens/MaterieProf";
import ListaStudeProiect from "./Screens/ListaStudProiect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_account: [],
    };
  }

  render() {
    return (
      <Router basename="/platforma">
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Main" component={Main} />
            <Route path="/DetaliiCont" component={DetaliiCont} />
            <Route path="/ClasaMaterie" component={ClasaMaterie} />
            <Route path="/Proiect" component={Proiect} />
            <Route path="/MainProf" component={MainProf} />
            <Route path="/MaterieProf" component={MaterieProf} />
            <Route path="/ListaStudProiect" component={ListaStudeProiect} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
