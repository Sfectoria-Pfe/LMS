
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchuser } from '../../../store/UserInfo';
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, cyan } from '@mui/material/colors';
import Button from '@mui/material/Button';

export default function UserDetails() {
    const user = useSelector((state) => state.userSlice.user);
const { id } = useParams();
const dispatch = useDispatch();
const theme = createTheme({
  palette: {
    primary: orange, 
    secondary: cyan,
   
  },
});
useEffect(() => {
  dispatch(fetchuser(id));
}, [dispatch]);
  return (
    <div className="d-flex justify-content-center py-4">
  <Card sx={{ maxWidth: 490 }}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="140"
          image={user?.image}
          alt="green iguana"
        />
       
       <div className="d-flex justify-content-center py-1" >
           <ThemeProvider theme={theme}>
      <Button variant="contained">{user?.role}</Button>
      </ThemeProvider>
        </div>
        <div className="d-flex justify-content-center py-1">
        <ThemeProvider theme={theme}>
  
  <Button variant="contained" color="secondary">{user?.email}</Button>
  </ThemeProvider>
        </div>
   
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
          {user?.firstName} {user?.lastName}
          </Typography>
      
       
          <Typography gutterBottom variant="h5" component="div">
          Phone 
          </Typography>
          <Typography variant="body4" color="text.secondary">
          {user?.phone} 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Address 
          </Typography>
          <Typography variant="body4" color="text.secondary">
          {user?.address} 
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
{/* {[  
     
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
 */}

    </div>
  )
}
