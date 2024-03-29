import React, { Component, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Programs() {
  const [state, setState] = useState({
    data: [],
  });
  const getData = async () => {
    try {
      let response = await axios.get("http://localhost:5000/programs");
      setState({ data: response.data });
      console.log("this is data from backend", response.data);
      // console.log("this is data"+ response.data); manajmch najma3 chaine m3a array
    } catch (err) {
      console.log("Error getting cards");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: "#F4FAFB" }}>
        <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
          <h1 style={{ fontFamily: "Brittany Signature" }}>Our Programs</h1>
          <div
            style={{
              height: "5px",
              width: "80px",
              backgroundColor: "rgb(66, 177, 188)",
              marginRight: "42px",
            }}
          ></div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-5 p-5 justify-content-center">
        {state.data.map((card) => (
          <Card style={{ width: "20rem", height: "35rem" }}>
            <Card.Img
              variant="top"
              src={card.imageURL}
              style={{ height: "12rem" }}
              className="thumb-img"
            />
            <Card.Body>
              <Card.Title style={{ width: "18rem", height: "65px" }}>
                {card.title}
              </Card.Title>
              <Card.Text
                style={{
                  width: "18rem",
                  height: "144px",
                  paddingTop: "10px",
                }}
              >
                {card.description}
              </Card.Text>
              <div className="d-flex py-5 justify-content-around">
                <Button>
                  {/* <Link
                      to={`/${card.id}`}
                      className="btn btn-primary"
                      onClick={() => ({
                        src: card.src,
                        name: card.name,
                        body: card.body,
                        description: card.description,
                      })}
                    > */}
                  See more
                  {/* </Link> */}
                  {/* <Button
                style={{ width: "7rem" }}
                variant="info"
                
              >
                More
              </Button> */}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
