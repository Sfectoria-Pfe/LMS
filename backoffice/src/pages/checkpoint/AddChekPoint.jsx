import { Accordion } from "@mui/material";
import React, { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "bootstrap";
export default function AddChekPoint() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [checkpointname, setcheckpointname] = useState(null);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({
    label: "",
    scale: 1,
    propositions: [
      { label: "", isCorrect: false },
      { label: "", isCorrect: false },
      { label: "", isCorrect: false },
      { label: "", isCorrect: false },
    ],
  });

  const handleChangePoposition = (e, index) => {
    const { value } = e.target;
    let aux = Object.assign({}, question);
    aux.propositions[index].label = value;
    setQuestion(aux);
  };
  const handleChangeCheckBox = (e, index) => {
    const { checked } = e.target;
    let aux = Object.assign({}, question);

    aux.propositions[index].isCorrect = checked;
    console.log(aux.propositions[index].isCorrect);
    setQuestion(aux);
  };
  const handleAddQuestion = () => {
    let aux = [...questions];
    aux.push(question);
    console.log(aux);
    setQuestions(aux);
    setQuestion({
      label: "",
      scale: 0,
      propositions: [
        { label: "", isCorrect: false },
        { label: "", isCorrect: false },
        { label: "", isCorrect: false },
        { label: "", isCorrect: false },
      ],
    });
  };
  return (
    <div>
      <div className="px-4">
        <div className="text-center py-4">
          <h5>checkpoint name</h5>

          <input
            type="text"
            onChange={(e) => {
              if (e.target.value) {
                setcheckpointname(e.target.value);
              }
            }}
          />
        </div>
        <Accordion className="px-4">
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <h3 style={{ fontFamily: "-apple-system" }}>Add your question</h3>
              <lord-icon
                src="https://cdn.lordicon.com/ftndcppj.json"
                trigger="hover"
                colors="primary:#30c9e8,secondary:#ebe6ef"
              ></lord-icon>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {questions.map((question, i) => (
                <div>
                  <div className="d-flex gap-3 justity-conent-between">
                    <h5>{question.label}</h5>

                    <p>{question.scale}</p>
                  </div>
                  {question.propositions.map((proposal, i) => (
                    <div className="d-flex align-items-center">
                      {proposal.isCorrect}
                      <p>{proposal.label}</p>

                      <Checkbox
                        {...label}
                        color="success"
                        onChange={(e) => handleChangeCheckBox(e, i)}
                        checked={proposal.isCorrect}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Typography className="d-flex gap-4 align-items-center ">
              <div>Question</div>
              <div className="d-flex align-items-center gap-3">
                <Form.Label>Scale:</Form.Label>
                <p class="text-muted mb-0">
                  <input
                    className="w-50 form-control  border border-info"
                    type="text"
                    name="exerciceName"
                    placeholder="question scale"
                    value={question.scale}
                    onChange={(e) => {
                      setQuestion({
                        ...question,
                        scale: +e.target.value,
                      });
                    }}
                  />
                </p>
              </div>
            </Typography>
            <Typography>
              <FormGroup controlId="formBasicEmail">
                <div className="d-flex justify-content-center gap-4 py-4 ">
                  <Form.Label>Question:</Form.Label>
                  <p class="text-muted mb-0">
                    <textarea
                      style={{ width: "30rem" }}
                      class="form-control"
                      className="px-3  border border-info "
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="question"
                      placeholder="question"
                      value={question.label}
                      onChange={(e) => {
                        setQuestion({
                          ...question,
                          label: e.target.value,
                        });
                      }}
                    ></textarea>
                  </p>
                </div>
                <div className="d-flex flex-wrap gap-4 py-3 justify-content-center">
                  <div className="d-flex align-items-center">
                    <Form.Label className="px-4 w-75">Answer 1 :</Form.Label>

                    <input
                      style={{ height: "3rem" }}
                      type="text"
                      name="exerciceName"
                      placeholder="answer 1"
                      className="form-control  border border-info"
                      onChange={(e) => handleChangePoposition(e, 0)}
                      value={question.propositions[0].label}
                    />
                    <Checkbox
                      {...label}
                      color="success"
                      onChange={(e) => handleChangeCheckBox(e, 0)}
                      checked={question.propositions[0].isCorrect}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <Form.Label className="px-4 w-75">Answer 2 :</Form.Label>

                    <div></div>
                    <input
                      style={{ height: "3rem" }}
                      type="text"
                      name="exerciceName"
                      placeholder="Answer 2"
                      className="form-control  border border-info"
                      onChange={(e) => handleChangePoposition(e, 1)}
                      value={question.propositions[1].label}
                    />
                    <Checkbox
                      {...label}
                      color="success"
                      onChange={(e) => handleChangeCheckBox(e, 1)}
                      checked={question.propositions[1].isCorrect}
                    />
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-4 py-3 justify-content-center">
                  <div className="d-flex align-items-center">
                    <Form.Label className="px-4 w-75">Answer 3 :</Form.Label>

                    <input
                      style={{ height: "3rem" }}
                      type="text"
                      name="exerciceName"
                      placeholder="Answer 3"
                      className="form-control  border border-info"
                      onChange={(e) => handleChangePoposition(e, 2)}
                      value={question.propositions[2].label}
                    />
                    <Checkbox
                      {...label}
                      color="success"
                      onChange={(e) => handleChangeCheckBox(e, 2)}
                      checked={question.propositions[2].isCorrect}
                    />
                  </div>
                  <div className="d-flex align-items-center">
                    <Form.Label className="px-4 w-75">Answer 4 :</Form.Label>

                    <input
                      type="text"
                      name="exerciceName"
                      placeholder="Answer 4"
                      className="form-control  border border-info"
                      onChange={(e) => handleChangePoposition(e, 3)}
                      value={question.propositions[3].label}
                    />
                    <Checkbox
                      {...label}
                      color="success"
                      onChange={(e) => handleChangeCheckBox(e, 3)}
                      checked={question.propositions[3].isCorrect}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-warning"
                    type="button"
                    onClick={handleAddQuestion}
                  >
                    Add
                  </button>
                </div>
              </FormGroup>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className=" d-flex justify-content-center py-3">
        <button className="btn btn-warning">Save</button>
      </div>
    </div>
  );
}
