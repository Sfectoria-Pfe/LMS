import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import bg from "../../../assets/bg.jpg";

import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendsession } from "../../../store/sessions";
import { fetchprograms } from "../../../store/Program";
import { fetchusers } from "../../../store/UserInfo";
import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";

export default function AddSession() {
  const [session, setsession] = useState({userIds: [],});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(session);
  const programs = useSelector((state) => state.ProgramSlice.programs.items);
  const users = useSelector((state) => state.userSlice.users.items);
  const [preview, setpreview] = useState(null);
  useEffect(() => {
    dispatch(fetchprograms());
    dispatch(fetchusers())
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsession({ ...session, [name]: name === "programId" ? +value : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("session",session)
    dispatch(sendsession(session)).then((res) => {
      if (!res.error) navigate("/sessions");
      else alert("you should fill the form");
    });
  };
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
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Image</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="text"
                      name="imageURL"
                      placeholder="image session"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </p>

                  <hr />
                  <Form.Label>Title</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="text"
                      name="title"
                      placeholder="title of session"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </p>

                  <hr />
                  <Form.Label>Description</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="text"
                      name="description"
                      placeholder="description of session"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </p>

                  <hr />

                  <Form.Label>Duration</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="number"
                      name="duration"
                      placeholder="duration"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </p>

                  <hr />

                  <Form.Label>Program</Form.Label>
                  <Form.Select
                    name="programId"
                    onChange={handleChange}
                    aria-label="Default select example"
                    required
                  >
                    <option>Open this select menu</option>
                    {programs.map((item, i) => (
                      <option value={item.id}>{item.title}</option>
                    ))}
                  </Form.Select>

                  <hr />

                  <Form.Label>Membres</Form.Label>
                  <Form.Select
                    name="userId"
                    onChange={handleChange}
                    aria-label="Default select example"
                    required
                  >
                    <option>Open this select menu</option>
                    {users.map((item, i) => (
                      <option value={item.id}>{item.email}</option>
                    ))}
                  </Form.Select>
                
                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    
                    value={session.userIds}
                    onChange={(e) => {
                      setsession({
                        ...session,
                        userIds: [...e.target.value],
                      });
                    }}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value.id} label={users.find(elem=>value=elem.id).email} />
                        ))}
                      </Box>
                    )}
                  // MenuProps={MenuProps}
                  >
                    {users.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.email}
                      </MenuItem>
                    ))}
                  </Select>
                  <div class="d-flex justify-content-center">
                    <Button
                      style={{ width: "7rem" }}
                      variant="warning"
                      type="submit"
                      onSubmit={handleSubmit}
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
