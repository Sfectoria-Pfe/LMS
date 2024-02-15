import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://sfectoria.com"><img src={require("../assets/logo.png")} width={"180px"} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
      
          </Nav>

          <div style={{fontSize:"30px"}}>
          <a href="">
              <VscAccount />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        {/* <div className="d-flex justify-content-between">
          <div  className="d-flex align-items-center">
            <a href="">
              <img src={require("../assets/logo.png")} width={"180px"} />
            </a>

            
              <a href="" className="px-5">
                <p style={{fontSize:"20px"}}>Home</p>
              </a>

              <a href="" className="px-5">
                <p>About us</p>
              </a>
          </div>

          <div>
            <a href="">
              <VscAccount />
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}
