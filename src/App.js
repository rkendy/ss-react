import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Container, Row, Col } from "react-bootstrap";
// import pizzas from './data';
import Login from "./components/Login";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
