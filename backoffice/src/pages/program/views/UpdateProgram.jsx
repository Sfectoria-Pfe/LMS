import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateProgram , fetchprogram } from '../../../store/Program';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function UpdateProgram() {
  const [updatedprogram, setUpdatedprogram] = useState({});
  const program = useSelector((state) => state.ProgramSlice.program);
    console.log(updatedprogram)
    const dispatch = useDispatch();
  const navigate = useNavigate();
   const [imageUrl, setImageUrl] = useState(null);

    let { id } = useParams();
  console.log(id, "Update program");
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0]);
    }
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedprogram({
        ...updatedprogram,
        [name]: name === "price" ? +value : value,
      });
    };


     const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProgram({ body: updatedprogram, id: +id })).then((res) => {
      if (!res.error) navigate("/programs");
      else alert("you should fill the form");
    });
  };
  useEffect(() => {
   dispatch(fetchprogram(id));
   window.scrollTo(0, 0);
 }, [dispatch]);
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center" style={{ height: "34rem" }}>
                  <img
                    src={program?.imageURL}
                    alt="programimg"
                    class="img-fluid"
                    style={{ height: "15rem" }}
                  />
                  <h5 class="my-3"></h5>
                  <p class="text-muted mb-1">
                    <div className="py-5">
                      <Form.Control
                        type="file"
                        name="imageURL"
                        placeholder="program photo"
                        onChange={handleFileChange}
                      />
                    </div>
                  </p>
                  
                  <div class="d-flex justify-content-center">
                    <Button
                      style={{ width: "7rem" }}
                      variant="warning"
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "48rem", height: "70rem" }} class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">program Title</p>
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
                      <p class="mb-0">program description</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          onChange={handleChange}
                          name="description"
                          as="textarea"
                          rows={3}
                          placeholder="please enter the program description"
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">price</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <input
                          className="w-75 form-control"
                          type="number"
                          min={0}
                          name="price"
                          placeholder="please enter the program price"
                          onChange={handleChange}
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
                      Update Courses
                    </h3>
                    <div class="col-sm-3">
                      <p class="mb-0">photo 1</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="tel"
                          name="src"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Photo 2</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        <Form.Control
                          type="tel"
                          name="src1"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Photo 3</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">
                        {" "}
                        <Form.Control
                          type="text"
                          name="src2"
                          onChange={handleChange}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
