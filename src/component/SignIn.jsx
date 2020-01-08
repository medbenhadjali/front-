// import React from "react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../actions/action';
import { connect } from 'react-redux';

function SigneIn() {
  const [login, setLogin] = useState('');
  const handlerLogin = (e) => {
    setLogin(e.target.value);
  };
  const [psw, setPsw] = useState('');
  const handlerPsw = (e) => {
    setPsw(e.target.value);
  };

  console.log(login, psw);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={'/'}>
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div></div>

      <div class="container">
        <h2>Signe IN</h2>
        <form action="/action_page.php">
          <div class="form-group">
            <label for="login">Login:</label>
            <input
              type="LOGIN"
              class="form-control"
              id="login"
              placeholder="Enter LOGIN"
              name="login"
              onChange={handlerLogin}
              value={login}
            />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              onChange={handlerPsw}
              value={psw}
            />
          </div>
          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" />{' '}
              Remember me
            </label>
          </div>
          <span>
            <a href="#">Mot de passe oublie ?</a>
          </span>
          <br />
          <Link to={'/SpaceUser'}>
            <button onClick="test" type="submit" class="btn btn-primary">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  // submit: add => dispatch(createUser(add))
});
export default connect(null, mapDispatchToProps)(SigneIn);
