import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Nav, NavDropdown, Card, Container, Row, Col } from "react-bootstrap";
import "./styles/Main.css";
import { WebCallClass } from "../Components/WebCallClass";
import Sidebar from "../Components/Sidebar";
import Clock from "../Components/Clock";
import cardImg from "../Screens/Images/Chemistry.jpg";

var WebCall = new WebCallClass();
class Main extends Component {
  constructor() {
    super();
    this.state = {
      redirect: null,
      rang: localStorage.getItem("rangid"),
      user_id: localStorage.getItem("myValueInLocalStorage"),
      user_account: [],
      materii_an: [],
      proiecte_id: [],
    };
  }

  materii = async () => {
    let result = await WebCall.Materii(this.state.user_account.IdAn);
    let arr = result.content;

    this.setState({ materii_an: arr });
    console.log(this.state.materii_an);
  };

  student = async () => {
    let result = await WebCall.GetStudentInfo(this.state.user_id);
    let arr = result.content;

    this.setState({ user_account: arr });
    this.materii();

    // console.log(['materii an'], this.state.materii_an)
    // if(typeof(result.content.length) == 'undefined' ) {

    //     arr[0] = result.content;
    //

    // }

    //  console.log(Object.values(this.state.user_account))
  };

  componentDidMount() {
    if (this.state.rang == 1) {
    } else if (this.state.rang == 2) {
      this.student();
    }
  }

  handleClick = (id) => {
    <Link
      to={{
        pathname: "/ClasaMaterie",
        state: { materieid: id },
      }}
    ></Link>;
  };

  render() {
    console.log(["account"], this.state.user_account);

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
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
            <h3>{this.state.user_account.An}</h3>
          </Nav.Item>
        </Nav>
        <Container className="card-container">
          <Row>
            {" "}
            {this.state.materii_an.map((item, key) => (
              <Col key={key} sm={12} md={4} className="my-3">
                <Card style={{ width: "300px", height: "380px" }}>
                  <Card.Img variant="top" src={cardImg} />
                  <Card.ImgOverlay>
                    <Card.Title className="card-title">
                      <Link
                        className="card-link"
                        to={{
                          pathname: "/ClasaMaterie",
                          state: {
                            idStud: this.state.user_account.id,
                            materieid: item.id,
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
          {/* <Row>
      <Col sm={12} md={4} >
  
  <Card style={{width:"300px", height:"300px"}}>
    <Card.Img variant="top" src={cardImg} />
    <Card.ImgOverlay>
    <Card.Title className="card-title"> </Card.Title>
      </Card.ImgOverlay>
    <Card.Body>
    
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col sm={12} md={4} >
  <Card style={{width:"300px", height:"300px"}}>
    <Card.Img variant="top" src={cardImg} />
    <Card.ImgOverlay>
    <Card.Title className="card-title">Structuri de date</Card.Title>
      </Card.ImgOverlay>
    <Card.Body>
      
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  <Col sm={12} md={4} >
  <Card style={{width:"300px", height:"300px"}}>
    <Card.Img variant="top" src={cardImg} />
    <Card.ImgOverlay>
    <Card.Title className="card-title">Aplicatii Web</Card.Title>
      </Card.ImgOverlay>
    <Card.Body>
      
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </Col>
  


</Row> */}
        </Container>
      </div>
    );
  }
}

export default Main;
