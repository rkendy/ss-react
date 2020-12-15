import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Container, Row, Col } from "react-bootstrap";
// import pizzas from './data';
import Login from "./components/Login";
import Home from "./components/Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" authenticated={true} exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
