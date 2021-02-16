import "./App.css";
import React from "react";
import { Link, Switch, Route, Router } from "react-router";
import Nav from "./components/nav/nav";
import { Counter } from "./pages/counter/counter";
import CounterWithRedux from "./pages/counterWithRedux/counterWithRedux";
import UserList from "./pages/user-list/user-list";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exactly path='/counter' component={Counter} />
        <Route exactly path='/counter-redux' component={CounterWithRedux} />
        <Route exactly path='/user-list' component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
