import React, { useEffect , useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchsession } from "../../../store/sessions";
import { Button, CardActionArea } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Accordion from "react-bootstrap/Accordion";
import video1 from "../../../assets/videos/html css botstrap.mp4";
import Card from "react-bootstrap/Card";
import ChatSession from "../components/ChatSession";
import chatchat from "../../../assets/images/icons8-facebook-messenger.gif";
import Typography from "@mui/material/Typography";
import Cardmui from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { orange, cyan } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SessionDetails() {
  //chat
  const [state, setState] = React.useState({
   
    bottom: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 700 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      
    >
        <ChatSession />
  

      <Divider />
    </Box>
  );

  const theme = createTheme({
    palette: {
      primary: orange,
      secondary: cyan,
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const [rows, setRows] = useState([]);
  const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Adresse email",
      type: "number",
      width: 200,
      editable: false,
    },
  ];
  const { sessionId } = useParams();
  const session = useSelector((state) => state.sessionsSlice.session);
  console.log(session?.SessionUser.image, "session users")
  const users = useSelector((state) => state.userSlice.users.items);
  console.log(session, "this is session");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchsession(sessionId));
  }, [dispatch]);

  useEffect(() => {
    if (session) {
      setRows(session.SessionUser.map((elem) => elem.user));
    }
  }, [session]);

  //CARDMUI

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div>
        {["left", "right", "top", "bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-wrap">
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
        </div>
        <div className=" p-5">
          <button
            className="btn"
            style={{ backgroundColor: "#ffc107" }}
            onClick={() => {}}
          >
            + Add new week
          </button>
          {/* <AddCourse setIsOpen={setIsOpen} isOpen={isOpen} /> */}
        </div>
      </div>

      {session?.videoURL && (
        <video
          id="bannerVideo"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "40rem" }}
          className="px-5"
        >
          <source src={session?.videoURL} type="video/mp4" />
        </video>
      )}
      <div className="d-flex justify-content-center "></div>
      <p className="px-5 py-3">
        Program description: {session?.program.description}
      </p>
      <p className="px-5 ">Duration: {session?.duration}</p>

      <h1
        style={{ fontFamily: "Fathers", color: "#42b1bc" }}
        className="text-center"
      >
        Members:
      </h1>
      <div
        style={{ display: "flex" }}
        className=" justify-content-center gap-5 py-3 align-items-center"
      >
        {session?.SessionUser.map((elem) => (
          <div>
            <Avatar
              alt="Avatar"
              src={elem.user.image}
              sx={{ width: 70, height: 70 }}
            />
            <div className="d-flex gap-2 py-2 text-center">
              <p>{elem.user.firstName}</p>
              <p>{elem.user.lastName}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <img
        className=" py-1"
        src={chatchat}
        data-bs-toggle="collapse"
        data-bs-target="#multiCollapseExample2"
        aria-expanded="false"
        aria-controls="multiCollapseExample2"
        style={{ width: "3rem", height: "3rem", float: "right" }}
      /> */}
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div
            style={{
              width: "30rem",
              height: "1rem",
              float: "right",
              zIndex: 10,
            }}
          >
            <ChatSession />
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        {/* <Cardmui sx={{ maxWidth: 900 }}>
          <CardHeader /> */}

        {/* <CardActions disableSpacing>
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
              <div className="d-flex flex-wrap justify-content-center py-5 gap-5 ">
                <ThemeProvider theme={theme}>
                  <Button variant="contained">Membres</Button>
                </ThemeProvider>
              </div>
              <Box sx={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
              </Box> */}
        {/* {session?.SessionUser.map((elem) => (
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.user.firstName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {elem.user.lastName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))} */}
        {/* <Typography paragraph>Program</Typography>
              <Typography paragraph>{session?.program.title}</Typography>
              <CardMedia
                component="img"
                height="194"
                image={session?.program.imageURL}
                alt="Paella dish"
              />
              <Typography paragraph>{session?.program.description}</Typography>
              <Typography>{session?.program.price}</Typography> */}
        {/* </CardContent>
          </Collapse>
        </Cardmui> */}
      </div>

      <div className="px-3 py-2" style={{ zIndex: 5 }}>
        <Accordion className=" d-flex ">
          <Accordion.Item eventKey="0" className="w-50">
            <Accordion.Header>week 1</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-center">
                content of week 1
              </div>
              <Card style={{ width: "19rem", height: "15rem" }}>
                <Card.Body></Card.Body>
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
