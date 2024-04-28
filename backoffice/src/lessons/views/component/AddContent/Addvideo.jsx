import React from 'react'
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";
import { Button } from "react-bootstrap";
export default function Addvideo() {
  return (
    <div>
      <div class="card-body">
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormGroup
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label>video</Form.Label>
              <p class="text-muted mb-0">
                <Form.Control
                  accept="video/*"
                  type="file"
                  name="video"
                  className="px-3 border border-info"
                  placeholder="image URL"
                  required
                />
              </p>
              <Form.Label>video Name</Form.Label>
              <p class="text-muted mb-0">
                <input
                  type="text"
                  name="pdfName"
                  placeholder="Video Name"
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
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
