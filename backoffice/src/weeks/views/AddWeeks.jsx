import React, { useEffect, useState } from "react";
import Session from "../../pages/sessions/Sessions";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { sendweek } from "../../store/weeks";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import { fetchlessoncontents } from "../../store/Lessoncontent";

export default function AddWeeks() {
  const dispatch = useDispatch();
  const { sessionId } = useParams();
  const [week, setweek] = useState({});
  const [weekcontents, setweekcontents] = useState([]);
  const lessoncontent = useSelector(
    (state) => state.lessoncontentSlice.lessoncontents.items
  );
  const session = useSelector((state) => state.sessionsSlice.session);
  // const [session, setsession] = useState({userIds: [],});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setweek({ ...week, [name]: name === "price" ? +value : value });
  };
  useEffect(() => {
    dispatch(fetchlessoncontents());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let auxweek = { ...week, sessionId: +sessionId, contentweek: weekcontents };

      console.log(auxweek);

      dispatch(sendweek(auxweek)).then((res) => {
        if (!res.error)
          window.location.href = `http://localhost:3000/sessions/${sessionId}`;
      });
    } catch (err) {
      console.log(err);
    }
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
        Add a week to session
      </h3>

      <div class="container py-3 d-flex justify-content-center">
        <div style={{ width: "65rem" }} class="col-lg-8">
          <div class="card mb-4">
            <Form onSubmit={handleSubmit}>
              <div class="card-body">
                <p class="text- text-center">{session?.title} 🧑‍💻 </p>

                <FormGroup
                  className="mb-3 d-flex justify-content-between"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Title</Form.Label>
                  <p class="text-muted mb-0">
                    <input
                      type="text"
                      name="title"
                      placeholder="title of week"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </p>

                  <hr />
                </FormGroup>
              </div>
              <div class="container py-2 d-flex justify-content-center">
                <div style={{ width: "65rem" }} class="col-lg-8">
                  <h3 className="text-center">Week content</h3>

                  <div
                    className="justify-content-center d-flex gap-5 py-5"
                    style={{ fontSize: "3rem", color: "#ffc801" }}
                  ></div>

                  <Select
                    labelId="demo-multiple-chip-label"
                    className="px-3 border border-info form-control "
                    id="demo-multiple-chip"
                    multiple
                    value={weekcontents}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setweekcontents(e.target.value);
                    }}
                    input={
                      <OutlinedInput id="select-multiple-chip" label="Chip" />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip
                            key={value.id}
                            label={
                              lessoncontent.find((elem) => value === elem.id)
                                .contentname
                            }
                          />
                        ))}
                      </Box>
                    )}
                    // MenuProps={MenuProps}
                  >
                    {lessoncontent.map((LessonContent) => (
                      <MenuItem key={LessonContent.id} value={LessonContent.id}>
                        {LessonContent.contentname}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div class="d-flex justify-content-center gap-4 py-3">
                <Button
                  style={{ width: "7rem" }}
                  variant="warning"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
