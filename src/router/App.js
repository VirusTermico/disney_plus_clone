import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../app/Home";
import Login from "../app/Login";
import Detail from "../app/Detail";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
         
        </Switch>
      </BrowserRouter>
  );
}

export default App;
