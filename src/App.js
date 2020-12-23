import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
// import pizzas from './data';
import Login from "./components/Login";
import Home from "./components/Home";
import MenuMain from "./components/MenuMain";
import NovaSolicitacao from "./components/NovaSolicitacao";
import Acompanhamento from "./components/Acompanhamento";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.authenticated === true ? (
        <div>
          <MenuMain />
          <Container fluid>
            <Component {...props} />
          </Container>
        </div>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  // ToDo: melhor lugar?
  const token = sessionStorage.getItem("sstoken");
  var isAuth = false;
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    isAuth = true;
  }
  const [authenticated, setAuthenticated] = useState(isAuth);

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login {...props} setAuthenticated={setAuthenticated} />
            )}
          />

          <PrivateRoute
            path="/"
            authenticated={authenticated}
            exact
            component={Home}
          />
          <PrivateRoute
            path="/solicitacao"
            authenticated={authenticated}
            exact
            component={NovaSolicitacao}
          />
          <PrivateRoute
            path="/solicitacao/*"
            authenticated={authenticated}
            exact
            component={Acompanhamento}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
