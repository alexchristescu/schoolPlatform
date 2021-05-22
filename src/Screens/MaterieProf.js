import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import {
  Nav,
  NavDropdown,
  Button,
  Card,
  FormControl,
  InputGroup,
  Container,
  Accordion,
  Modal,
  Row,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import fileicon from "./Images/file-icon.png";
import { WebCallClass } from "../Components/WebCallClass";

var WebCall = new WebCallClass();

export default class MaterieProf extends Component {
  constructor() {
    super();

    this.state = {
      Proiecte: [],
      denumire: "",
      show: false,
    };
  }

  idProiecte = async () => {
    const { materieid } = this.props.location.state;
    let result = await WebCall.idProiectProf(materieid);
    let arr = result.content;
    this.setState({ Proiecte: arr });
    console.log(this.state.Proiecte);
  };

  createProject = async () => {
    const { profId } = this.props.location.state;
    const { materieid } = this.props.location.state;
    let result = await WebCall.createProject(
      materieid,
      this.state.denumire,
      profId
    );

    if (result.status === true) {
      alert("proiectul a fost creat cu succes");
    } else {
      alert("a aparut o eroare");
    }
    window.location.reload(false);
  };

  componentDidMount() {
    this.idProiecte();
    // const { materieid } = this.props.location.state;
    // console.log(materieid);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleClick = () => {
    if (this.state.denumire != "") {
      this.createProject();
      this.setState({ show: false });
    } else {
      alert("introdu o denumire");
    }
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { prenume } = this.props.location.state;
    const { denumire } = this.props.location.state;
    const { nume } = this.props.location.state;
    const { profId } = this.props.location.state;

    return (
      <>
        <div className="sidebar">
          <Sidebar />
        </div>

        <Nav className="justify-content-end nav">
          <Nav.Item>
            <Clock />
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title={prenume} id="nav-dropdown">
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
            <h2>{denumire}</h2>
          </Nav.Item>
        </Nav>
        <Container className="d-flex flex-row-reverse my-4">
          <Button variant="primary" onClick={this.handleShow}>
            Create new project
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>New Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="justify-content-center">
                <InputGroup className="mb-3" style={{ width: "90%" }}>
                  <FormControl
                    placeholder="Project Name"
                    aria-label="Project Name"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={this.state.denumire}
                    onChange={(event) =>
                      this.setState({ denumire: event.target.value })
                    }
                  />
                </InputGroup>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleClick}
              >
                Create
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>

        <Container className="my-4">
          {this.state.Proiecte != -1 ? (
            this.state.Proiecte.map((item, key) => (
              <Accordion key={key}>
                <Card className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {item.Denumire}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="acordion-body">
                      <Card className="small-card">
                        <Card.Body>
                          <img src={fileicon} alt="" />
                          <Link
                            className="file-link"
                            to={{
                              pathname: "/ListaStudProiect",
                              state: {
                                idProiect: item.id,
                                nume: nume,
                                prenume: prenume,
                                denumire: item.Denumire,
                                nota: item.Nota,
                              },
                            }}
                          >
                            {" "}
                            <br></br> Lista Studenti
                          </Link>
                        </Card.Body>
                      </Card>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))
          ) : (
            <h2>No Project</h2>
          )}
        </Container>
      </>
    );
  }
}
