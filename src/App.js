import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/country/:countryName" component={CountryDetails} />
      </Switch>
    </Router>
  );
}

export default App;
