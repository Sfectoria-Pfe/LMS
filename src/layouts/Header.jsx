import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';





export default class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
  }
  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href=""><img src={require("../assets/logo.png")} width={"150px"} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>

              </Nav>

              <Button variant="outline-primary" >Connection</Button>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

