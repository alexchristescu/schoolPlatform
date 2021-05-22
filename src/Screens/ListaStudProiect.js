import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import {
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Container,
  Table,
  Row,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { WebCallClass } from "../Components/WebCallClass";

var WebCall = new WebCallClass();

export default class ListaStudProiect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [],
      persons: [],
      idProiect: this.props.location.state.idProiect
        ? this.props.location.state.idProiect
        : "",
      comentariu: "",
      nota: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  listaStudProiect = async () => {
    let result = await WebCall.listaStudProiect(this.state.idProiect);
    let arr = result.content;
    this.setState({ studentList: arr });
  };

  componentDidMount() {
    this.listaStudProiect();
  }

  notaProf = async (IdStudent) => {
    let stareProiect = 1;
    let result = await WebCall.notaProf(
      this.state.idProiect,
      IdStudent,
      this.state.nota,
      this.state.comentariu,
      stareProiect
    );
    if (result.status === true) {
      alert("nota a fost adaugata cu succes");
    } else {
      alert("a aparut o eroare");
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick(IdStudent) {
    this.notaProf(IdStudent);
    document.getElementById("noteaza-proiect").reset();
    this.listaStudProiect();
  }

  regularExp = (fileExtension) => {
    let patternValue = /\.[0-9a-z]+$/i;
    let regex = new RegExp(patternValue, "g");
    let result = fileExtension.match(regex);
    return result;
  };
  render() {
    const { denumire } = this.props.location.state;
    const { prenume } = this.props.location.state;
    // const { nume } = this.props.location.state;
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
        <br></br>
        <Container>
          <Row className="justify-content-center">
            <Table striped bordered hover style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Nume</th>
                  <th>Proiect</th>
                  <th>Comentariu Student</th>
                  <th>Nota si Comentariu</th>
                  <th>Notare proiect</th>
                </tr>

                {this.state.studentList != -1 ? (
                  this.state.studentList.map((item, key) => (
                    <tr key={key}>
                      <td>
                        {item.Nume} {item.Prenume}
                      </td>
                      <td>
                        <a
                          href={
                            "http://localhost/platforma_studenti/fisiereProiecte/" +
                            item.DenumireFisier +
                            this.regularExp(item.DenumireFisier)
                          }
                        >
                          {item.DenumireFisier}
                        </a>
                      </td>
                      <td>{item.Comentarii}</td>
                      <td>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <p>Nota</p>
                          <Form id="noteaza-proiect">
                            <FormControl
                              type="number"
                              min="1"
                              max="10"
                              name="nota"
                              onChange={(event) =>
                                this.handleInputChange(event)
                              }
                            />
                            <div style={{ margin: "20px 0px 20px 0px" }}>
                              <p>Comentariu</p>
                              <FormControl
                                type="text"
                                name="comentariu"
                                onChange={(event) =>
                                  this.handleInputChange(event)
                                }
                              />
                            </div>
                            <Button
                              onClick={(e) => {
                                this.handleClick(item.IdStudent);
                              }}
                            >
                              Noteaza
                            </Button>
                          </Form>
                        </div>
                      </td>
                      <td>
                        {item.StareProiect == 1
                          ? "Nota " + item.Nota
                          : "Proiectul nu a fost notat"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <h4>No projects</h4>
                )}
              </tbody>
            </Table>
          </Row>
        </Container>
      </>
    );
  }
}
