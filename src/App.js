import React from 'react';
import './App.css';
import Home from "./component/Home";
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import SpaceUser from "./component/SpaceUser";
import { Provider } from "react-redux";
import store from './Store/Store';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SpaceUser" component={SpaceUser} />
        </Switch>
      </div>
    </BrowserRouter>

      </Provider>
  );
}

export default App;
