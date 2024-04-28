import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchsession } from "../../../store/sessions";

import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";
import ChatSession from "../components/ChatSession";
import chatchat from "../../../assets/images/icons8-facebook-messenger.gif";
import Typography from '@mui/material/Typography';
import Cardmui from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

function SessionDetails() {
  const { sessionId} = useParams();
  const session = useSelector((state) => state.sessionsSlice.session);
  console.log(session, "this is session");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchsession(sessionId));
  }, [dispatch]);

//CARDMUI

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (



    <div>
<div  className=" d-flex justify-content-center" > 
<p
          className=" py-2"
          style={{
            fontSize: "2rem",
            color: "#42b1bc",
            fontFamily: "Brittany Signature",
          }}
        >
          BY SFECTORIA
        </p>

</div>
<img  className=" py-1"src={chatchat}   data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"  style={{ width: "4rem", height: "4rem", float:"right" }}  />
      <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div  style={{ width: "30rem", height: "1rem", float:"right", zIndex:10 }} >
      <ChatSession  />
      </div>
    </div>
  </div>
<div className=" d-flex justify-content-center">
<Cardmui sx={{ maxWidth: 900 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {session?.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= {session?.title}
        subheader={session?.duration}
      />
      <CardMedia
        component="img"
        height="194"
        image={session?.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {session?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Program</Typography>
          <Typography paragraph>
          {session?.program.title}
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image= {session?.program.imageURL}
        alt="Paella dish"
      />
          <Typography paragraph>
          {session?.program.description}
          </Typography>
          <Typography>
           {session?.program.price}
          </Typography>
        </CardContent>
      </Collapse>
    </Cardmui>
</div>

   
      {/* <div className="d-flex">
        <p className="px-5 py-4" style={{ fontSize: "2rem" }}>
          {session?.title}
        </p>
        <p className=" py-4" style={{ fontSize: "2rem", color: "#42b1bc" }}>
          |
        </p>
        <p
          className=" py-4"
          style={{
            fontSize: "2rem",
            color: "#42b1bc",
            fontFamily: "Brittany Signature",
          }}
        >
          BY SFECTORIA
        </p>
      </div> */}
      {/* <p className="px-5 py-1">Description: {session?.description}</p> */}

      <div className="px-3 py-2" style={{zIndex:5}}>
        <Accordion className=" d-flex ">
          <Accordion.Item eventKey="0" className="w-50">
            <Accordion.Header>week 1</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-center">
              content of week 1
              </div>
              <Card style={{ width: "19rem", height: "15rem" }}>
              
                <Card.Body>
                 
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* <Accordion className=" d-flex justify-content-center">
          <Accordion.Item eventKey="0" className="w-100">
            <Accordion.Header>week 2</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-center">
              content of week 2
              </div>
              <Card style={{ width: "19rem", height: "15rem" }}>
              
                <Card.Body>
                 
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


        <Accordion className=" d-flex justify-content-center">
          <Accordion.Item eventKey="0" className="w-100">
            <Accordion.Header>week 3</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-center">
              content of week 3
              </div>
              <Card style={{ width: "19rem", height: "15rem" }}>
              
                <Card.Body>
                 
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion className=" d-flex justify-content-center">
          <Accordion.Item eventKey="0" className="w-100">
            <Accordion.Header>week 4</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-center">
              content of week 4
              </div>
              <Card style={{ width: "19rem", height: "15rem" }}>
              
                <Card.Body>
                 
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      
      </div>
   
    </div>
  );
}

export default SessionDetails;
