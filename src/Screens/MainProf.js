import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Card, Container, Row, Col } from "react-bootstrap";
import "./styles/Main.css";
import { WebCallClass } from "../Components/WebCallClass";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import cardImg from "../Screens/Images/Chemistry.jpg";

var WebCall = new WebCallClass();

class MainProf extends Component {
  constructor() {
    super();

    this.state = {
      redirect: null,
      rang: localStorage.getItem("rangid"),
      user_id: localStorage.getItem("myValueInLocalStorage"),
      user_account: [],
      materii: [],
      proiecte_id: [],
    };
  }

  materiiProf = async () => {
    let result = await WebCall.materiiProf(this.state.user_account.IdMaterie);
    let arr = result.content;

    this.setState({ materii: arr });
    console.log(this.state.materii);
  };

  prof = async () => {
    let result = await WebCall.GetProfInfo(this.state.user_id);
    let arr = result.content;

    this.setState({ user_account: arr });
    this.materiiProf();
    console.log(this.state.user_account);
  };

  componentDidMount() {
    this.prof();
  }

  render() {
    return (
      <div className="MainContainer">
        <div className="sidebar">
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
            <h2>Classrooms</h2>
          </Nav.Item>
        </Nav>
        <Container className="card-container">
          <Row>
            {" "}
            {this.state.materii.map((item, key) => (
              <Col key={key} sm={12} md={4} className="my-3">
                <Card style={{ width: "300px", height: "380px" }}>
                  <Card.Img variant="top" src={cardImg} />
                  <Card.ImgOverlay>
                    <Card.Title className="card-title">
                      <Link
                        className="card-link"
                        to={{
                          pathname: "/MaterieProf",
                          state: {
                            materieid: item.id,
                            profId: this.state.user_account.ID,
                            nume: this.state.user_account.Nume,
                            prenume: this.state.user_account.Prenume,
                            denumire: item.denumire,
                          },
                        }}
                      >
                        {item.denumire}
                      </Link>{" "}
                    </Card.Title>
                  </Card.ImgOverlay>
                  <Card.Body>
                    <Card.Text>{item.descriere}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainProf;
