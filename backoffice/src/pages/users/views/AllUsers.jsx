

import { deleteuser, fetchusers } from '../../../store/UserInfo';
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {DataGrid} from '@mui/x-data-grid';
import {Box, Avatar, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";



export default function AllUsers() { 
  const users = useSelector((state) => state.userSlice.users.items);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchusers());
  }, [dispatch]);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [deletedId,setDeletedId]=useState("");

  const deleteUser=(id)=>{
    dispatch(deleteuser(id));
    window.location.reload();
}
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
            <button className="btn btn-sm btn-secondary" onClick={() => navigate( `edituser/${params.row.id}`)}>Edit</button>
            <button className="btn btn-sm btn-primary" onClick={() => navigate(`userdetails/${params.row.id}`)}>See more</button>
            <button className="btn btn-sm btn-danger ms-2"   onClick={() => {
                    setModalShow(true);
                    setDeletedId(params.row.id); 
                    
                  }} >Delete</button>
          </Stack>
        );
    },},
    
  ],[] )
  return (
   
    <Box 
    sx={{
      height:350,
      width:'100'
    }}>
<Typography
variant='h3'
component='h3'
sx={{textAlign:'center', mb:3}}>
  list of all lms users
</Typography>
<div className="px-5">
  <button className="btn btn-success my-3" onClick={() => navigate("adduser")}>
      Add user +
 </button>
     </div>
<DataGrid 
 columns={columns}
 rows={users} />

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
        
          <Button className="btn btn-danger" onClick={() => {
            deleteUser(deletedId)
          setModalShow(false)}}>Delete</Button>
        </div>
      </Modal>
  </Box>
  
  )
}



//       export default function AllUsers() {   
//         const users = useSelector((state) => state.userSlice.users.items);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchusers());
//   }, [dispatch]);
//   const navigate = useNavigate();
//   const [query, setQuery]= useState("");
 
//   return (

    
//     <div>
        
//     <div>
//       <h3
//         className="p-1"
//         style={{
//           fontFamily: "Segoe UI",
//           color: "#11354D",
//           textDecoration: "underline",
//         }}
//       >
//         All users
//       </h3>
//       <div className="px-5">
//         <button className="btn btn-success my-3" onClick={() => navigate("adduser")}>
//           Add user +
//         </button>
//       </div>
//     </div>
//     {/* <input className='search' placeholder='Search...'  onChange={(e) => setQuery(e.target.value)}/> */}
//     <div className="p-4 d-flex justify-content-center" style={{ height: "100%", width: "100%" }}>
   
//   <table className='table' >
// <thead>
//   <tr>
// <th>Id</th>
// <th>Name</th>
// <th>Email</th>
// <th>Phone</th>
// <th>Role</th>
// <th>Action</th>

// </tr>
// </thead>
// <tbody>
// {users.map((user, index)=>(
//   <tr key={index}>
// <td>{user.id}</td>
// <td>{user.lastName} {user.firstName}</td>
// <td>{user.email}</td>
// <td>{user.phone}</td>
// <td>{user.role}</td>
// <td>

// </td>
// <button className="btn btn-sm btn-primary" onClick={() => navigate("edituser")}>Edit</button>
// <button className="btn btn-sm btn-danger ms-2" >Delete</button>
//   </tr>
// )
// )}


// </tbody>



//   </table >
//     </div>
//   </div>
// );
// }



