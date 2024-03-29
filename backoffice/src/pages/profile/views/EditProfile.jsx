import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../../router/Router";
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";


export default function EditProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [updatedUser, setUpdatedUser] = useState("");

  // function ProfileEditForm() {
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     dispatch(user({ field: fristName, value }));
  //   }
  // };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src=""
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 class="my-3"></h5>
                <p class="text-muted mb-1">
                  <Form.Control
                    type="text"
                    placeholder="im a developer"
                    
                  />
                </p>
                <p class="text-muted mb-4">SFECTORIAN ✌️</p>
                <div class="d-flex justify-content-center">
                  <Button
                    style={{ width: "7rem" }}
                    variant="warning"
                    onClick={() => {
                      setUser({ ...user, firstName: updatedUser });
                      navigate(-1);
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>

            <div class="card mb-4 mb-lg-0">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div class="text-warning" style={{ fontSize: "30px" }}>
                      <FaLinkedin />
                    </div>

                    <Form.Control
                      style={{ width: "15rem" }}
                      type="url"
                      placeholder="linkedin"
                      
                    />
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div style={{ fontSize: "30px", color: "#333333" }}>
                      <FaGithub />
                    </div>
                    <Form.Control
                      style={{ width: "15rem" }}
                      type="url"
                      placeholder="github"
                      
                    />
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div style={{ fontSize: "30px", color: "#00BAC7" }}>
                      <SiDiscord />
                    </div>
                    <Form.Control
                      style={{ width: "15rem" }}
                      type="url"
                      placeholder="discord"
                      
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ width: "48rem" }} class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">First Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="text"
                        placeholder="name"
                        onChange={(e) => setUpdatedUser(e.target.value)}
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Last Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="text"
                        placeholder="last name"
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="email"
                        placeholder="email"
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="tel"
                        placeholder="phone"
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Date of birth</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      <Form.Control
                        type="date"
                        placeholder="phone"
                        
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      {" "}
                      <Form.Control
                        type="text"
                        placeholder="adress"
                        
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <div class="card mb-4 ">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Occupation</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <select
                          id=""
                          name="occupation"
                          type="text"
                          placeholder="adress"
                          
                        >
                          <option value="volvo">student</option>
                          <option value="saab">worker</option>
                          <option value="fiat">other</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Studies</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="text"
                          placeholder="studies"
                          
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">College</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="text"
                          placeholder="college"
                          
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Degree</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="text"
                          placeholder="degree"
                          
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
  
