import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavDropdown,
  Table,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { WebCallClass } from "../Components/WebCallClass";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import { Link } from "react-router-dom";
import lock from "./Images/lock.svg";

var WebCall = new WebCallClass();
class DetaliiCont extends Component {
  constructor() {
    super();
    this.state = {
      user_id: localStorage.getItem("myValueInLocalStorage"),
      rang_ID: localStorage.getItem("rangid"),
      user_account: [],
      new_pass: "",
      confirm_pass: "",
    };
  }

  newpass = async () => {
    var result = await WebCall.newpass(this.state.user_id, this.state.new_pass);
    if (result.status == true) {
      alert("parola a fost schimbata cu success");
    } else {
      alert("a aparut o eroare");
    }
  };

  account = async () => {
    console.log(localStorage.getItem("rangid"));
    if (this.state.rang_ID == 2) {
      var result = await WebCall.GetStudentInfo(this.state.user_id);
    } else if (this.state.rang_ID == 1) {
      result = await WebCall.GetProfInfo(this.state.user_id);
    }

    let arr = result.content;

    this.setState({ user_account: arr });
  };

  componentDidMount() {
    this.account();
    console.log(this.state.new_pass);
  }

  handleClick = () => {
    if (
      this.state.new_pass === this.state.confirm_pass &&
      this.state.new_pass !== "" &&
      this.state.confirm_pass !== ""
    ) {
      this.newpass();
    } else {
      alert("parola si confrim parola sunt diferite sau campurile sunt goale");
    }
  };

  render() {
    return (
      <div>
        <div>
          <Sidebar />
        </div>

        <Nav className="justify-content-end nav">
          <Nav.Item>
            <Clock />
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title={this.state.user_account.Prenume}
              id="nav-dropdown"
            >
              <Link to="/DetaliiCont">
                {" "}
                <NavDropdown.Item disabled style={{ color: "#000" }}>
                  Detalii cont
                </NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              <Link to="/" replace>
                {" "}
                <NavDropdown.Item disabled>Log Out </NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        <Nav
          className="justify-content-center"
          style={{
            height: "150px",
            color: "#f2f2f2",
            background: "linear-gradient(90deg,#0e2a3b 0,#34306b)",
          }}
        >
          <Nav.Item>
            <h2>Detalii Cont</h2>
          </Nav.Item>
        </Nav>
        <br></br>
        <Container>
          <Row className="justify-content-center">
            <Table striped bordered hover style={{ width: "80%" }}>
              <tbody>
                <tr>
                  <td>Nume</td>
                  <td>{this.state.user_account.Nume}</td>
                </tr>
                <tr>
                  <td>Prenume</td>
                  <td>{this.state.user_account.Prenume}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.user_account.Email}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row className="justify-content-center my-2">
            <Col style={{ maxWidth: "83%" }}>
              <h3>Change Password</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <InputGroup className="mb-3" style={{ width: "80%" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <img src={lock} alt="password" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="New Password"
                aria-label="New Password"
                aria-describedby="basic-addon1"
                type="password"
                value={this.state.confirm_pass}
                onChange={(event) =>
                  this.setState({ confirm_pass: event.target.value })
                }
              />
            </InputGroup>
          </Row>
          <Row className="justify-content-center">
            <InputGroup className="mb-3" style={{ width: "80%" }}>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <img src={lock} alt="password" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Confirm New Password"
                aria-label="Confrim New Password"
                aria-describedby="basic-addon1"
                type="password"
                value={this.state.new_pass}
                onChange={(event) =>
                  this.setState({ new_pass: event.target.value })
                }
              />
            </InputGroup>
          </Row>
          <Row className="justify-content-center">
            <Col style={{ maxWidth: "83%" }}>
              <Button onClick={() => this.handleClick()}>Schimba</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetaliiCont;
