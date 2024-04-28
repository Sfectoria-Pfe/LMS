import React from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";

export default function Addpdf() {
  return (
    <div>
      <FormGroup
        className="mb-3 d-flex justify-content-between"
        controlId="formBasicEmail"
      >
        <Form.Label>pdf</Form.Label>
        <p class="text-muted mb-0">
          <Form.Control
            accept="pdf/*"
            type="file"
            name="pdf"
            className="px-3 border border-info"
            placeholder="pdf"
            required
          />
        </p>

        <hr />
        <Form.Label>pdf name</Form.Label>
        <p class="text-muted mb-0">
          <input
            type="text"
            name="pdfName"
            placeholder="title of session"
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
