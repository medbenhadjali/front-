// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../actions/action";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function SigneUp() {
  let history = useHistory();
  let add = {};
  function ViewImage(file) {
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
    var file = document.querySelector('input[type="file"]').files[0];
    getBase64(file).then(data => "#ImageBase46".val(data));
  }

  const [name, setName] = useState("");
  const handlerName = e => {
    setName(e.target.value);
  };
  const [lname, setLname] = useState("");
  const handlerLname = e => {
    setLname(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handlerEmail = e => {
    setEmail(e.target.value);
  };

  const [phone, setPhone] = useState("");
  const handlerPhone = e => {
    setPhone(e.target.value);
  };

  const [psw, setPsw] = useState("");
  const handlerPsw = e => {
    setPsw(e.target.value);
  };

  const [sex, setSex] = useState("");
  const handlerSex = e => {
    setSex(e.target.value);
  };

  const [date, setDate] = useState("");
  const handlerDate = e => {
    setDate(e.target.value);
  };

  const [adress, setAdress] = useState("");
  const handlerAdress = e => {
    setAdress(e.target.value);
  };
  const [img, setImg] = useState("");
  const handlerImg = e => {
    setImg(ViewImage(e.target.value));
  };
  const submit = () => {
    history.push("/SpaceUser", { state: add });
  };
  // console.log(adress, name, lname, sex, psw, date, psw);
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
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={"/"}>
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
        <h2>Signe UP</h2>
        <form action="/action_page.php">
          <div class="form-group">
            <label for="First Name">First Name</label>
            <input
              type="text"
              class="form-control"
              id="First Name"
              placeholder="Enter First Name"
              name="First Name"
              onChange={handlerName}
              value={name}
            />
          </div>
          <div class="form-group">
            <label for="Last Name">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="Last Name"
              placeholder="Enter Last Name"
              name="Last Name"
              onChange={handlerLname}
              value={lname}
            />
          </div>
          <div class="form-group">
            <label for="Email">Email</label>
            <input
              type="email"
              class="form-control"
              id="Email"
              placeholder="Enter Email "
              name="Email"
              onChange={handlerEmail}
              value={email}
            />
          </div>

          <div class="form-group">
            <label for="Phone">Phone</label>
            <input
              type="tel"
              class="form-control"
              id="Phone"
              placeholder="Enter Phone"
              name="Phone"
              onChange={handlerPhone}
              value={phone}
            />
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="password"
              class="form-control"
              id="Password"
              placeholder="Enter Password "
              name="Password"
              onChange={handlerPsw}
              value={psw}
            />
          </div>
          <div class="form-group">
            <label for="Sex">Sex</label>
            <input
              type="text"
              class="form-control"
              id="Sex"
              placeholder="Enter Sex"
              name="Sex"
              onChange={handlerSex}
              value={sex}
            />
          </div>
          <div class="form-group">
            <label for="Date Naissance ">Date Naissance </label>
            <input
              type="date"
              class="form-control"
              id=""
              placeholder="Enter Date Naissance  "
              name="Date Naissance "
              onChange={handlerDate}
              value={date}
            />
          </div>
          <div class="form-group">
            <label for="Adress">Adress Postal </label>
            <input
              type="text"
              class="form-control"
              id="Adress Postal"
              placeholder="Enter Adress Postal"
              name="Adress Postal"
              onChange={handlerAdress}
              value={adress}
            />
          </div>
          <div class="form-group">
            <label for="img">img</label>
            <input
              type="file"
              class="form-control"
              id="img"
              placeholder="Enter image svp  "
              name="Password"
              onChange={handlerImg}
              value={img}
            />
          </div>
          <button
            onClick={() =>
              submit(
                add = {
                  name: name,
                  lname: lname,
                  email: email,
                  phone: phone,
                  psw: psw,
                  sex: sex,
                  date: date,
                  adress: adress
                }
              )
            }
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  submit: add => dispatch(createUser(add))
});

export default connect(null, mapDispatchToProps)(SigneUp);
