import React, { Component } from "react";
import "./styles/Login.css";
import { Form, Button, Figure } from "react-bootstrap";
import logo from "./Images/logo.png";
import { Redirect } from "react-router-dom";
import { WebCallClass } from "../Components/WebCallClass";

var WebCall = new WebCallClass();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      pass: [],
      redirect: null,
      isToggleOn: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  login = async () => {
    var result = await WebCall.login(this.state.user, this.state.pass);
    console.log(result);
    if (result.status == true) {
      localStorage.setItem("myValueInLocalStorage", result.userId);
      localStorage.setItem("rangid", result.rangId);

      if (result.rangId == 2) {
        this.setState({ redirect: "Main" });
      } else if (result.rangId == 1) {
        this.setState({ redirect: "MainProf" });
      }
    } else {
      alert(result.mesaj);
      localStorage.removeItem("myValueInLocalStorage");
      localStorage.removeItem("rangid");
    }
  };

  _handleKeyDown = (e) => {
    if (e.key == "Enter") {
      this.login();
    }
  };

  handleClick = () => {
    this.login();
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="main">
        <div className="container form-container">
          <div className="row justify-content-center text-center align-items-center form-row">
            <div className="col-12">
              <Form className="login">
                <Figure>
                  <Figure.Image width={171} height={180} src={logo} />
                </Figure>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="Username"
                    value={this.state.user}
                    onChange={(event) =>
                      this.setState({ user: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.state.pass}
                    onChange={(event) =>
                      this.setState({ pass: event.target.value })
                    }
                    onKeyDown={this._handleKeyDown}
                  />
                </Form.Group>

                <Button onClick={() => this.handleClick()}>Enter</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
