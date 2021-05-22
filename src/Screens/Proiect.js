import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import {
  Nav,
  NavDropdown,
  Form,
  Row,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Proiect.css";
import axios from "axios";
import { WebCallClass } from "../Components/WebCallClass";

var webCall = new WebCallClass();

export default class Proiect extends Component {
  constructor() {
    super();
    this.state = {
      file: [],
      comentariu: [],
      id: [],
      denumire: [],
      nota: [],
    };
  }

  uploadDateProiect = async () => {
    const { idProiect } = this.props.location.state;
    const { idStud } = this.props.location.state;

    if (this.state.comentariu == "" || this.state.file.length == 0) {
      return alert("comentariu sau fisier neincarcat");
    }
    let result = await webCall.uploadDateProiect(
      idProiect,
      idStud,
      this.state.comentariu,
      this.state.file.name
    );
    if (result.status === true) {
      alert("a fost incarcat cu succes");
    } else {
      alert("nu a fost incarcat cu succes");
    }
  };

  async UploadFile(file, comentariu) {
    let response;
    let formData = new FormData();
    formData.append("file", file);
    formData.append("comentariu", comentariu);
    const finalResult = axios.all([
      (response = await axios.post(
        "http://localhost/platforma_studenti/fisiereProiecte/uploadFiles.php",
        formData
      )),
    ]);

    return finalResult;
  }

  handleSubmit = () => {
    this.uploadDateProiect();
    this.UploadFile(this.state.file, this.state.comentariu);
    this.proiectStud();
    window.location.reload();
  };

  proiectStud = async () => {
    const { idProiect } = this.props.location.state;
    const { idStud } = this.props.location.state;
    let result = await webCall.proiectStud(idProiect, idStud);
  };

  render() {
    const { prenume } = this.props.location.state;
    const { denumire } = this.props.location.state;
    // const {nota} = this.props.location.state;
    const { nume } = this.props.location.state;

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
        <Container className="main-container">
          <Row>
            <h3 className="project-title">{denumire}</h3>
            {/* <h3 className="project-grade">Graded {nota}/10</h3> */}
          </Row>
          <hr className="hr" />
          <Form>
            <Form.Group>
              <Form.File
                id="fileToUpload"
                label="Incarca Proiect"
                name="fileToUpload"
                type="file"
                onChange={(event) =>
                  this.setState({ file: event.target.files[0] })
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comentarii</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comentariu"
                type="text"
                value={this.state.comentariu}
                onChange={(event) =>
                  this.setState({ comentariu: event.target.value })
                }
              />
            </Form.Group>
            <Button onClick={this.handleSubmit}> Incarca Proiect </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
