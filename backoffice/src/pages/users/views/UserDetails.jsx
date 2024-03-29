
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchuser } from '../../../store/UserInfo';
import { useNavigate, useParams } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';

export default function UserDetails() {
    const user = useSelector((state) => state.userSlice.user);
const { id } = useParams();
const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchuser(id));
}, [dispatch]);
  return (
    <div className="d-flex justify-content-center py-4">

{[  
     
        'Dark',
      ].map((variant, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg={variant.toLowerCase()}
          key={idx}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{user?.firstName} {user?.lastName}</strong>
            <small>{user?.role}</small>
          </Toast.Header>
          <Toast.Body className={variant === 'Dark' && 'text-white'}>
          {user?.email}

          </Toast.Body>
        </Toast>
      ))}


    </div>
  )
}
