// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchprograms , deleteprogram } from "../../../store/Program";
// import Card from "react-bootstrap/Card";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { Button, Modal } from "bootstrap";

// export default function ProgramsList() {
//   const programs = useSelector((state) => state.ProgramSlice.programs.items);
//    const [modalShow, setModalShow] = useState(false);
//    const [deletedId, setDeletedId] = useState("");

//   console.log(programs);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchprograms());
//   }, [dispatch]);

//    const deleteprogram = (id) => {
//      dispatch(deleteprogram(id));
//      window.location.reload();
//    };

//   const navigate = useNavigate();
//   return (
//     <div>
//       <div className="px-5">
//         <button className="btn btn-primary" onClick={() => navigate("add")}>
//           Add program
//         </button>
//       </div>
//       <div className="d-flex flex-wrap justify-content-between px-5 py-5 gap-5 ">
//         {programs.map((card) => (
//           <Card style={{ width: "20rem", height: "35rem" }}>
//             <Card.Img
//               variant="top"
//               src={card.imageURL}
//               style={{ height: "12rem" }}
//               className="thumb-img"
//             />
//             <Card.Body>
//               <Card.Title style={{ width: "18rem" }}>{card.title}</Card.Title>
//               <Card.Text className="py-3" style={{ width: "18rem" }}>
//                 {card.description}
//               </Card.Text>
//               <div className="d-flex justify-content-center">
//                 <Link to={`${card.id}`}>
//                   <button className="btn btn-primary">See more</button>
//                 </Link>
//                 <button className="btn btn-warning">Update</button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => {
//                     setModalShow(true);
//                     setDeletedId(card.id);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>

//       <Modal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Delete course
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Are you sure you want to delete this program ?</p>
//         </Modal.Body>
//         <div className="d-flex justify-content-center gap-2 py-3">
//           <Button onClick={() => setModalShow(false)}>Cancle</Button>

//           <Button
//             className="btn btn-danger"
//             onClick={() => {
//               deleteprogram(deletedId);
//               setModalShow(false);
//             }}
//           >
//             Delete
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteprogram, fetchprograms } from "../../../store/Program";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link, NavLink, useNavigate } from "react-router-dom";
// import PopUp from "./PopUp";

import Modal from "react-bootstrap/Modal";

export default function ProgramsList() {
  const programs = useSelector((state) => state.ProgramSlice.programs.items);
  const [modalShow, setModalShow] = useState(false);
  const [deletedId, setDeletedId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprograms());
  }, [dispatch]);

  const deleteProgram = (id) => {
    dispatch(deleteprogram(id));
  };

  const navigate = useNavigate();
  const deletedIdfunc = (id) => {
    setDeletedId(id);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3
          className="p-5"
          style={{
            fontFamily: "Segoe UI",
            color: "#11354D",
            textDecoration: "underline",
          }}
        >
          Welcome to programs page
        </h3>
        <div className=" p-5">
          <button
            className="btn"
            style={{ backgroundColor: "#ffc107" }}
            onClick={() => navigate("add")}
          >
            + Add new program
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center py-5 gap-5 ">
        {programs.map((card) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              style={{ objectFit: "cover" }}
              component="img"
              alt="green iguana"
              height="140"
              image={card.imageURL}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  navigate(`details/${card.id}`);
                }}
                variant="outlined"
              >
                Learn More
              </Button>
              <Button
                size="small"
                onClick={() => {
                  navigate(`update/${card.id}`);
                }}
                variant="outlined"
                color="secondary"
              >
                Update
              </Button>
              <Button
                size="small"
                onClick={() => {
                  setModalShow(true);
                  deletedIdfunc(card.id);
                }}
                variant="outlined"
                color="error"
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this course ?</p>
        </Modal.Body>
        <div className="d-flex justify-content-center gap-2 py-3">
          <Button onClick={() => setModalShow(false)}>Cancle</Button>

          <Button
            className="btn btn-danger"
            onClick={() => {
              deleteProgram(deletedId);
              setModalShow(false);
            }}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}
