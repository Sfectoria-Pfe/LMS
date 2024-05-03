import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editsession , fetchsession } from '../../../store/sessions';
import { fetchprograms } from "../../../store/Program";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function UpdateSession() {
  const [editsession, setEditedsession] = useState({});
  const session = useSelector((state) => state.sessionsSlice.session);
  const programs = useSelector((state) => state.ProgramSlice.programs.items);
    console.log(editsession)
    const dispatch = useDispatch();
  const navigate = useNavigate();
   const [imageUrl, setImageUrl] = useState(null);

    let { id } = useParams();
  console.log(id, "Update session");
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
    }
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedsession({
        ...editsession,
        [name]: name === "price" ? +value : value,
      });
    };


     const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editsession({ body: editsession, id: +id })).then((res) => {
      if (!res.error) navigate("/sessions");
      else alert("you should fill the form");
    });
  };
  useEffect(() => {
   dispatch(fetchsession(id));
   window.scrollTo(0, 0);
 }, [dispatch]);
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            
            <div style={{ width: "48rem", height: "70rem" }} class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                <div class="card-body text-center" style={{ height: "34rem" }}>
                  <img
                    src={session?.imageURL}
                    alt="programimg"
                    class="img-fluid"
                    style={{ height: "15rem" }}
                  />
                  <h5 class="my-3"></h5>
                  <p class="text-muted mb-1">
                    <div className="py-4">
                      <Form.Control
                        type="file"
                        name="imageURL"
                        placeholder="program photo"
                        onChange={handleFileChange}
                      />
                    </div>
                  </p>
                  
               
                </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Session Title</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="text"
                          name="title"
                          placeholder="name"
                          onChange={handleChange}
                          //   onChange={(e) => setUpdatedUser(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Session description</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          onChange={handleChange}
                          name="description"
                          as="textarea"
                          rows={3}
                          placeholder="please enter the session description"
                        />
                      </p>
                    </div>
                  </div>
    
                  <hr />
                  <div class="row">
                    <h3
                      className="text-center py-3"
                      style={{ color: "#ffca2c" }}
                    >
                      Update Program
                    </h3>
                   
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">program </p>
                    </div>
                    <div class="col-sm-9">
    
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
                 
                    </div>
                    <div class="d-flex justify-content-center py-4">
                    <Button
                      style={{ width: "7rem" }}
                      variant="warning"
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  </div>
                  </div>
                  <hr />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
