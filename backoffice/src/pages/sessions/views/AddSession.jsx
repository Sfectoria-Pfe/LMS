import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg.jpg";

import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendsession } from "../../../store/sessions";

export default function AddSession() {
  const [session, setsession] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsession({ ...session, [name]: name === "imageURL" ? +value : value });
  };


  console.log(session);
  const [preview, setpreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendsession(session)).then((res) => {
      if (!res.error) navigate("/sessions");
      else alert("you should fill the form");
    });
 
  }
  return (
    <div>
           <h3
        className="p-1"
        style={{
          fontFamily: "Segoe UI",
          color: "#11354D",
          textDecoration: "underline",
        }}
      >
        Add session
      </h3>


      <div class="container py-5">
          <div style={{ width: "48rem" }} class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
              <p class="text- text-center">SFECTORIAN ✌️</p>
              <Form>
                  <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='imageURL'
                        placeholder="image session"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
               
                <hr />
                    <Form.Label>Title</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='title'
                        placeholder="title of session"
                        onChange={handleChange}
                      />
                    </p>
                 
               
                <hr />
                    <Form.Label>Description</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='description'
                        placeholder="description of session"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
               
                <hr />
               
                    <Form.Label>Duration</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='duration'
                        placeholder="duration"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
                <hr />

                
                    <Form.Label>ProgramId</Form.Label>
                    <p class="text-muted mb-0"> 
                      <input
                        type="text"
                        name='programId'
                        placeholder="program id"
                        onChange={handleChange} 
                      />
                    </p>
                
                <hr />
                
                    <Form.Label>weeks</Form.Label>
                 
                    <p class="text-muted mb-0">
                      <input
                        type="tel"
                        name='weeksId'
                        placeholder="weeks Id"
                        onChange={handleChange}
                        
                      />
                    </p>
                <hr />  
                  
                  <div class="d-flex justify-content-center">
                  <Button
                    style={{ width: "7rem" }}
                    variant="warning"
                    type="submit"
                    onClick={handleSubmit}
                    >
                    Save
                  </Button>
                  </div>
            
             
            
            </FormGroup>
                </Form>
          </div>
        </div>
      
        </div>

        </div> 
    </div>
  )
    }