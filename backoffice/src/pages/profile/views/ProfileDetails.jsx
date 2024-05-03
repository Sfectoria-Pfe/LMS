import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { UserContext } from "../../../router/Router";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export default function ProfileDetails() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img
                  src={user.src}
                  alt="avatar"
                  class="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 class="my-3">{user.firstName}</h5>
                <p class="text-muted mb-1">Full Stack Developer</p>
                <p class="text-muted mb-4">SFECTORIAN ✌️</p>
                <div class="d-flex justify-content-center">
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("edit")}
                    style={{ width: "7rem" }}
                  >
                    Edit
                  </button>
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

                    <a href="#" style={{ all: "unset" }} class="mb-0">
                      https://mdbootstrap.com
                    </a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div style={{ fontSize: "30px", color: "#333333" }}>
                      <FaGithub />
                    </div>
                    <a href="#" style={{ all: "unset" }} class="mb-0">
                      mdbootstrap
                    </a>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <div style={{ fontSize: "30px", color: "#00BAC7" }}>
                      <SiDiscord />
                    </div>
                    <a href="#" style={{ all: "unset" }} class="mb-0">
                      @mdbootstrap
                    </a>
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
                    <p class="text-muted mb-0">{user.firstName}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Last Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.lastName}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.Email}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.Phone}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Date of birth</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.dateOfBirth}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.adress}</p>
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
                      <p class="text-muted mb-0">{user.occupation}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Studies</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.studies}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">College</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.college}</p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Degree</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{user.degree}</p>
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
