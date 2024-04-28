
import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import logo from "../assets/logo.png";
import "../Pages/css/buttonform.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function SessionDetails() {
  
  const [state, setState] = useState({});
  const [form, setForm] = useState({});
  const { id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/api/v1", form);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:5000/sessions/" + id);
      setState({ data: response.data });
      console.log("this is data from backend", response.data);
    } catch (err) {
      console.log("Error getting cards");
    }
  };
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return  <div>
    
 
    
    <Card className="py-4 px-3   justify-content-center">
      <Card.Header className="d-flex justify-content-center" ><h3 style={{ fontFamily: "Brittany Signature" }}>
           <div>{state.data?.title}</div> 
           <div
            style={{
              height: "5px",
              width: "520px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>
          </h3></Card.Header>
      <Card.Body>
        <Card.Title style={{width:"7rem"}}  className="d-flex justify-content-center">{state.data?.description}</Card.Title>
        <Card.Title  className="d-flex justify-content-center">{state.data?.duration}</Card.Title>
      <Card.Text>
      <div className="  d-flex justify-content-center">
        <img
          src={state.data?.imageURL}
          style={{
            marginBottom: "2%",
            marginTop: "1%",
            width: "60rem",
            height: "20rem",
          }}
        />
      </div>
      Our admissions department will contact you within 48 business hours
          following your registration request submitted via the online contact
          form. For faster processing, you can reach us by phone at (+216 55 180
          992).
          </Card.Text>
          If you wish to join our school, please fill out the form below, and
          you will be invited to an admission interview to assess the quality of
          your application
        </Card.Body>
    </Card>


      <div className="px-5 py-1"></div>
        {/* <div className="px-3">
        
          <div class="button" style={{ marginBottom: "30px" }}>
            {state.data?.price} dt
          </div>
        </div> */}
     
    

      <div
        className="px-5 py-4 d-flex justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzgtMDkteC5qcGc.jpg')",
        }}
      >
        <div
          className="card py-5 px-4"
          style={{ width: "70rem", height: "39rem" }}
        >
          <p className="fs-1  ">Registration form</p>
          {/* <button class="btn btn-light" onClick={() => this.props.showHome()}><
          Home
        </button> */}
          <Link to={`/`} className="btn btn-primary">
                    Home
                  </Link>
          <Form className="py-5 px-3 " onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 d-flex p-2 gap-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className="px-3 border border-info"
                name="FirstName"
                placeholder="FirstName"
                onChange={handleChange}
              />
              <Form.Control
                name="LastName"
                className="border border-info"
                placeholder="LastName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex p-2 gap-5 "
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                name="email"
                className="px-3 border border-info"
                placeholder="Email"
                onChange={handleChange}
              />
              <Form.Control
                name="phone"
                className="border border-info"
                placeholder="Phone"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex p-2 gap-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                name="adress"
                className="border border-info"
                placeholder="Adresse"
                onChange={handleChange}
              />
              <Form.Control
                name="occupation"
                className="border border-info"
                placeholder="occupation"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex p-2 gap-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                name="date"
                type="dateOfBirth"
                className="border border-info"
                placeholder="Date of birth"
                onChange={handleChange}
              />
              <Form.Control
                name="studies"
                className="border border-info"
                placeholder="studies"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex p-2 gap-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                name="college"
                className="border border-info"
                placeholder="college"
                onChange={handleChange}
              />
              <Form.Control
                name="degree"
                className="border border-info"
                placeholder="Degree"
                onChange={handleChange}
              />
            </Form.Group>
            <div className="  py-2 px-2 d-flex justify-content-center ">
              <button
                type="submit"
                name="button"
                class="btn btn-info"
                onSubmit={() => handleSubmit()}
              >
                Valider ma demande d'inscription
              </button>
            </div>
          </Form>
        </div>
      </div> 
    
    
    
    </div>;
}