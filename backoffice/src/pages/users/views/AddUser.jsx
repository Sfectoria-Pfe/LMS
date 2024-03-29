import React from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { UserContext } from "../../../router/Router";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { senduser } from '../../../store/UserInfo';


export default function AddUser() {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: name === "phone" ? +value : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(senduser(user)).then((res) => {
      if (!res.error) navigate("/users");
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
        Add user
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
                        name='image'
                        placeholder="avatar"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
               
                <hr />
                    <Form.Label>First Name</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='firstName'
                        placeholder=" first name"
                        onChange={handleChange}
                      />
                    </p>
                 
               
                <hr />
                    <Form.Label>Last Name</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="text"
                        name='lastName'
                        placeholder="last name"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
               
                <hr />
               
                    <Form.Label>Email</Form.Label>
                    <p class="text-muted mb-0">
                      <input
                        type="email"
                        name='email'
                        placeholder="email"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
                <hr />

                
                    <Form.Label>Password</Form.Label>
                  
                 
                    <p class="text-muted mb-0">
                     
                      <input
                        type="text"
                        name='password'
                        placeholder="password"
                        onChange={handleChange}
                        
                      />
                    </p>
                
                <hr />
                
                    <Form.Label>Phone</Form.Label>
                 
                    <p class="text-muted mb-0">
                      <input
                        type="tel"
                        name='phone'
                        placeholder="phone"
                        onChange={handleChange}
                        
                      />
                    </p>
                 
                <hr />
                
                    <Form.Label>Address</Form.Label>
                  
                
                    <p class="text-muted mb-0">
                     
                      <input
                        type="text"
                        name='address'
                        placeholder="adress"
                        onChange={handleChange}
                        
                      />
                    </p>
                
                <hr />
                
               
                    <Form.Label>Role</Form.Label>
                 
                    <p class="text-muted mb-0">
                     
                      <input
                        type="text"
                        name='role'
                        placeholder="role"
                        onChange={handleChange}
                        
                      />
                    </p>
                
                    
                    
                  
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
  );
}
