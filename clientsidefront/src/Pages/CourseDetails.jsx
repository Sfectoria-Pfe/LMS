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

export default function CourseDetails() {
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
      let response = await axios.get("http://localhost:5000/courses/" + id);
      setState({ data: response.data });
      console.log("this is data from backend", response.data);
      // console.log("this is data"+ response.data); manajmch najma3 chaine m3a array
    } catch (err) {
      console.log("Error getting cards");
    }
  };
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="px-5 py-4"></div>
      <div>
        <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
          <h3 style={{ fontFamily: "Brittany Signature" }}>
            {state.data?.title}
          </h3>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>
        </div>

        <div className="px-3">
          <h1> {state.data?.description} </h1>
          <div class="button" style={{ marginBottom: "30px" }}>
            {state.data?.price} dt
          </div>
        </div>
      </div>
      <div className="  d-flex justify-content-center">
        <img
          src={state.data?.imageURL}
          alt=""
          style={{
            borderRadius: "10%",
            marginBottom: "8%",
            width: "80rem",
            height: "20rem",
          }}
        />
      </div>

      <div style={{ height: "150px" }}>
        <p class="lead">
          Our admissions department will contact you within 48 business hours
          following your registration request submitted via the online contact
          form. For faster processing, you can reach us by phone at (+216 55 180
          992).
        </p>
        <p class="lead">
          If you wish to join our school, please fill out the form below, and
          you will be invited to an admission interview to assess the quality of
          your application
        </p>
      </div>

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
          {/* <button class="btn btn-light" onClick={() => this.props.showHome()}>
          Home
        </button> */}
          <button class="btn btn-light" onClick={() => handleSubmit()}>
            Accueil
          </button>
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

            {/* <Form.Label className="py-2 px-2">
          Formation que je souhaite intégrer au sein de l'école SFECTORIA
        </Form.Label> */}
            {/* <Form.Select
          aria-label="Default select example"
          className="border border-info"
        >
          <option>Veuillez choisir une option</option>
          <option value="1">Formation Développement Web</option>
          <option value="2">Formation Développement Mobile</option>
          <option value="3">Formation Data Science</option>
        </Form.Select> */}

            {/* <Form.Label className="py-2 px-2">
          Session d'entretien souhaitée
        </Form.Label>
        <Form.Select
          aria-label="Default select example"
          className="border border-info "
        >
          <option>Veuillez choisir une option</option>
          <option value="1">Lundis à 14:30</option>
          <option value="2">Mercredis à 15:30</option>
          <option value="3">Vendredis à 11</option>
        </Form.Select> */}

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
      <div>
        <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
          <h1 style={{ fontFamily: "Brittany Signature" }}>gallery</h1>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>

          <div class="gallery" style={{ marginTop: "5%" }}>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={state.data?.src2} thumbnail />
                </Col>
                <Col xs={6} md={4}>
                  <Image src={state.data?.src1} thumbnail />
                </Col>
                <Col xs={6} md={4}>
                  <Image src={state.data?.src} thumbnail />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
