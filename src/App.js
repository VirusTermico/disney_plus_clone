import React from "react";
import Home from "./app/Home";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./app/Detail";
import Login from "./app/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
