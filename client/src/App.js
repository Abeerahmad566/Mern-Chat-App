import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/"> {<Home />} </Route>
          <Route path="/chat">{<Chat />} </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
