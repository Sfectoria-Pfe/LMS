import React, { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack';
import {Box, Avatar, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from 'react-redux';
 
    function AllSessions() {
        const sessions = useSelector((state) => state.sessionsSlice.sessions.items);
        const [modalShow, setModalShow] = useState(false);
        const [deletedId, setDeletedId] = useState("");
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const columns = useMemo(()=>[
            {field: 'photoURL', headerName:'Avatar', width:30, renderCell : (params)=> <Avatar src={params.row.image}/>, sortable : false, filterable : false,},
            {field: 'id', headerName:'Id', width:30},
            {field: 'firstName', headerName:'FirstName', width:90},
            {field: 'lastName', headerName:'LastName', width:90},
            {field: 'email', headerName:'Email', width:200},
            {field: 'phone', headerName:'Phone', width:100},
            {field: 'address', headerName:'Address', width:100},
            {field: 'role', headerName:'Role', width:90},
            {field: '', headerName:'Action', width:250,  sortable: false,
            disableClickEventBubbling: true,


            renderCell: (params) => {
                return (
                  <Stack direction="row" spacing={2}>
                     <Button
                        size="small"
                        onClick={() => navigate( `edituser/${params.row.id}`)}
                        variant="outlined"
                        color="secondary"
                      >
                        Edit
                      </Button>
                    <Button
                        size="small"
                        onClick={() => navigate(`userdetails/${params.row.id}`)}
                        variant="outlined"
                      >
                        See more
                      </Button>
        {/*               
                              // <FaTrashAlt
                              //   style={{ color: "red" }}
                              //   onClick={() => {
                              //     setModalShow(true)
                              //     setuserId(params.id)
                              //   }
                                  
                              //   }
                              // /> */}
                           
        <Button
                        size="small"
                        onClick={() => {
                          setModalShow(true);
                          setDeletedId(params.row.id); 
                        }}
                        variant="outlined"
                        color="error"
                      >
                        Delete
                      </Button>
        
                  </Stack>
                );
            },},
            
          ],[] )
 
        return (
<div>

<h3
            className="p-5"
            style={{
              fontFamily: "Segoe UI",
              color: "#11354D",
              textDecoration: "underline",
            }}
          >
            Welcome to sessions page
          </h3>






          <Box 
    sx={{
      height:350,
      width:'100'
    }}>
<Typography
variant='h3'
component='h3'
sx={{textAlign:'center', mb:3}}>
  list of all lms sessions
</Typography>
<div className="px-5">
  <button className="btn btn-success my-3" onClick={() => navigate("adduser")}>
      Add session +
 </button>
     </div>
<DataGrid 
 columns={columns}
 rows={sessions} />

<Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this user ?</p>
        </Modal.Body>
        <div className="d-flex justify-content-center gap-2 py-3">
          <Button onClick={()=>setModalShow(false)}>Cancle</Button>
        
          {/* <Button className="btn btn-danger" onClick={() => {
              dispatch(
                edituser({
                  id: userId,
                  body: { archived: true },
                })
              )
            deleteUser(deletedId)
          setModalShow(false)}}
          >Delete</Button> */}
        </div>
      </Modal>
  </Box>
  

</div>
            
        );
    

}
export default AllSessions