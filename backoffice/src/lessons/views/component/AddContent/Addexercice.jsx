import React from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";

export default function Addexercice() {
  return (
    <div>
      <FormGroup
        className="mb-3 d-flex justify-content-between"
        controlId="formBasicEmail"
      >
        <Form.Label>Exercice</Form.Label>
        <p class="text-muted mb-0">
          <textarea
            style={{ width: "30rem" }}
            class="form-control"
            className="px-3 "
            id="exampleFormControlTextarea1"
            rows="3"
            required
            name="exercice"
            placeholder="exercice"
          ></textarea>
        </p>

        <hr />
        <Form.Label>Exercice Name</Form.Label>
        <p class="text-muted mb-0">
          <input
            type="text"
            name="exerciceName"
            placeholder="exercice name"
            className="form-control"
            required
          />
        </p>

        <hr />
      </FormGroup>
      <div class="d-flex justify-content-center">
        <Button style={{ width: "7rem" }} variant="warning" type="submit">
          Save
        </Button>
      </div>
      <hr />
    </div>
  );
}
