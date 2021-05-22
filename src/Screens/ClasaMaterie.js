import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import { Nav, NavDropdown, Container, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/ClasaMaterie.css";
import { WebCallClass } from "../Components/WebCallClass";
import fileicon from "./Images/file-icon.png";

var WebCall = new WebCallClass();

export default class ClasaMaterie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "",
      Proiecte: [],
    };
  }

  idProiecte = async () => {
    const { materieid } = this.props.location.state;
    const { idStud } = this.props.location.state;
    let result = await WebCall.idProiect(materieid, idStud);
    let arr = result.content;
    // arr2 = arr.map((el) => el[""]);
    this.setState({ Proiecte: arr });
  };

  componentDidMount() {
    this.idProiecte();
  }

  componentDidUpdate() {
    this.idProiecte();
  }

  render() {
    // const { handle } = this.props.match.params;
    // const { materieid } = this.props.location.state;
    const { prenume } = this.props.location.state;
    const { denumire } = this.props.location.state;
    const { nume } = this.props.location.state;
    const { idStud } = this.props.location.state;

    return (
      <div>
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
        <Container className="my-5">
          {this.state.Proiecte !== -1 ? (
            this.state.Proiecte.map((item, key) => (
              <Accordion key={key}>
                <Card className="card">
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {item.Denumire}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="acordion-body">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Card className="small-card">
                          <Card.Body>
                            <img src={fileicon} alt="" />
                            <Link
                              className="file-link"
                              to={{
                                pathname: "/Proiect",
                                state: {
                                  idProiect: item.id,
                                  nume: nume,
                                  prenume: prenume,
                                  denumire: item.Denumire,
                                  idStud: idStud,
                                  comentariuProf: item.ComentariuProf,
                                },
                              }}
                            >
                              {" "}
                              <br></br> incarca proiect
                            </Link>
                          </Card.Body>
                        </Card>
                        <div>
                          {item.ComentariuProf != null ? (
                            <div>
                              <h3>Comentariu Profesor:</h3>
                              <p>{item.ComentariuProf}</p>
                            </div>
                          ) : null}
                        </div>
                        <h2>
                          {item.Nota != null
                            ? "Nota " + item.Nota
                            : "Proiectul nu a fost notat"}
                        </h2>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))
          ) : (
            <tr>
              <h2>Nici un proiect creat pentru cursul acesta</h2>
            </tr>
          )}
        </Container>
      </div>
    );
  }
}
