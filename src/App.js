import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import signinPage from './pages/signin';
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/signin" component={signinPage}/>
    </Switch>
    </Router>
  );
}

export default App;
