import React from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import { edituser } from '../../../store/UserInfo';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';

export default function EditUser() {

  const [user, updateuser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()
  console.log(id ,"this is id")
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateuser({ ...user, [name]: name === "phone" ? +value : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edituser({body:user, id:+id})).then((res) => {
      if (!res.error) navigate("/users");
      else alert("you should fill the form");
    });
 
  }
  return (
    <div>




<div class="card mb-4">
              <div class="card-body">
              <p class="text- text-center">SFECTORIAN ✌️</p>
              <Form>
                  <FormGroup className="mb-3" controlId="formBasicEmail">
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
  )
}
