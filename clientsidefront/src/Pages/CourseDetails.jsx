import React, { Component, useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import CardContent from "@mui/joy/CardContent";
// import Card from "react-bootstrap/Card";
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
import Box from "@mui/material/Box";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Pricing from "@mui/joy/Card";

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
      <div className="d-flex flex-wrap gap-4 p-5 justify-content-center">
        <div>
          <Pricing
            size="lg"
            variant="outlined"
            orientation="horizontal"
            sx={{
              textAlign: "center",
              maxWidth: "100%",
              width: 700,
              // to make the demo resizable
              resize: "horizontal",
              overflow: "auto",
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 300 }}>
              <img src={state.data?.imageURL} loading="lazy" alt="" />
            </AspectRatio>
            <CardContent
              sx={{
                textAlign: "center",
                flex: "0  600px",

                justifyContent: "center",
                px: 'var(--Card-padding: "70px")',
              }}
              size="lg"
            >
              <Typography level="title-lg" id="card-description">
                {" "}
                {state.data?.title}{" "}
              </Typography>
              <Typography level="body-md">
                {" "}
                {state.data?.description}
              </Typography>
            </CardContent>
          </Pricing>
        </div>
        <div style={{ height: "4px", width: "350px" }}>
          <Pricing
            size="sm"
            variant="solid"
            color="neutral"
            invertedColors
            sx={{ bgcolor: "neutral.900" }}
          >
            <Chip size="sm" variant="outlined">
              MOST POPULAR
            </Chip>
            <Typography level="h2">Unlimited</Typography>
            <Divider inset="none" />
            <List
              size="sm"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                mx: "calc(-1 * var(--ListItem-paddingX))",
              }}
            >
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Virtual Credit Cards
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Financial Analytics
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Checking Account
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                Access to all advanced training modules
              </ListItem>
              <ListItem>
                <ListItemDecorator>
                  <Check />
                </ListItemDecorator>
                3 team members
              </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
              <Typography level="title-lg" sx={{ mr: "auto" }}>
                {state.data?.price}{" "}
                <Typography fontSize="sm" textColor="text.tertiary">
                  Dt
                </Typography>
              </Typography>
            </CardActions>
          </Pricing>
        </div>
      </div>

      <div></div>
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
