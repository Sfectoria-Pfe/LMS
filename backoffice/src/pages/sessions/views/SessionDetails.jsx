import React ,{ useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  fetchsession } from '../../../store/sessions';

import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";

function SessionDetails() {
  const { id } = useParams();
  const session = useSelector((state) => state.sessionsSlice.session);
  console.log(session, "this is session");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchsession(id));
  }, [dispatch]);

  return (
    <div>
  <div className="d-flex">
        <p className="px-5 py-4" style={{ fontSize: "2rem" }}>
          {session?.title}
        </p>
        <p className=" py-4" style={{ fontSize: "2rem", color: "#42b1bc" }}>
          |
        </p>
        <p
          className=" py-4"
          style={{
            fontSize: "2rem",
            color: "#42b1bc",
            fontFamily: "Brittany Signature",
          }}
        >
          BY SFECTORIA
        </p>
      </div>
      <p className="px-5 py-4">Description: {session?.description}</p>

     
        <div className="px-3">
          <Accordion className=" d-flex justify-content-center">
            <Accordion.Item eventKey="0" className="w-100">
              <Accordion.Header>{session?.program.title}</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-center">
                  <img
                    src={session?.program.imageURL}
                    alt=""
                    style={{ width: "50rem", height: "25rem" }}
                  />
                </div>
                <Card style={{ width: "19rem", height: "15rem" }}>
                  <Card.Img
                    variant="top"
                    src=""
                    style={{ height: "11rem" }}
                    className="thumb-img"
                  />
                  <Card.Body>
                   
                    <Card.Text style={{ width: "18rem", height: "7rem" }}>
                      hh
                    </Card.Text>
                   
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <p className="text-center"></p>
        </div>


    </div>
  )
}

export default SessionDetails







 


 

