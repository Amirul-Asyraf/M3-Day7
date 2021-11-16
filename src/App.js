import Home from './containers/home';
import Login from './containers/login';
import Registration from './containers/registration';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} className="App">
      <Switch>

        <Route path="/login" component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/" component={Registration} />

      </Switch>
    </Router>
  );
}

export default App;
