import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  function NavBar({ isOpen, setIsOpen }) {
    const user = useSelector((store) => store.auth.me);
    const navigate = useNavigate();

    return (
      <Box sx={{ flexGrow: 1 }} className={` d-flex ${isOpen ? "justify-content-end" : "justify-content-between"
        } align-items-center shadow-sm`}
        style={{
          zIndex: 2,
          backgroundColor: "#F8FAFB",
          position: "fixed",
          width: "100%",
          paddingLeft: isOpen ? 300 : 0,
          height: 70,
        }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
             </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    );
  }
}
  

// import React, { useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import Form from "react-bootstrap/Form";
// import { FaSearch } from "react-icons/fa";
// import { UserContext } from "../router/Router";
// import { IoNotifications } from "react-icons/io5";
// import { FaMessage } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBBtn,
//   MDBInputGroup,
// } from "mdb-react-ui-kit";
// import { useSelector } from "react-redux";
// import Button from "react-bootstrap/esm/Button";

// function NavBar({ isOpen, setIsOpen }) {
//   const user = useSelector((store) => store.auth.me);
//   const navigate = useNavigate();
//   return (
//     <div
//       className={` d-flex ${
//         isOpen ? "justify-content-end" : "justify-content-between"
//       } align-items-center shadow-sm`}
//       style={{
//         zIndex: 2,
//         backgroundColor: "#F8FAFB",
//         position: "fixed",
//         width: "100%",
//         paddingLeft: isOpen ? 300 : 0,
//         height: 70,
//       }}
//     >
//       {/* <div style={{ paddingLeft: isOpen ? 200 : 30 }}>
//         <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
//           <input
//             className="form-control"
//             placeholder="Type query"
//             aria-label="Search"
//             type="Search"
//           />
//           <MDBBtn outline>Search</MDBBtn>
//         </MDBInputGroup>
//       </div> */}
//       <div>
//         {isOpen !== true && (
//           <button
//             style={{ color: "#00BAC7", fontSize: "30px" }}
//             className="btn btn-light"
//             onClick={() => setIsOpen(true)}
//           >
//             <FaBars />
//           </button>
//         )}
//       </div>
//       <div></div>
//       <div></div>

//       <div className="d-flex  align-items-center gap-3 px-4">
//         <div
//           className="px-3 d-flex align-items-center"
//           style={{ color: "#00BAC7", fontSize: "25px" }}
//         >
//           <div className="px-3">
//             <FaMessage />
//           </div>
//           <div>
//             <IoNotifications />
//           </div>
//         </div>
//         {/* <p className="m-0">Welcome {user.firstName} ✨</p> */}
//         <Link to="/profile">
//           <img
//             src={user.image}
//             alt=""
//             className="rounded-circle"
//             style={{ width: 50, height: 50, objectFit: "cover" }}
//           />
//         </Link>
//         <Button  onClick={()=> {
//           localStorage.removeItem("token")
//           window.location.pathname="/"
//         }}> logout </Button>
//       </div>
//     </div>
//   );

//   {
//     /* <div className="py-3 , px-5 d-flex align-items-center flex-wrap justify-content-between">
//         <div
//           className="px-3 py-2 text-white"
//           style={{
//             backgroundColor: "#00BAC7",
//             fontSize: "18px",
//             borderRadius: "35%",
//           }}
//         >
//           <FaSearch />
//         </div>
//         <div className="px-3 ">
//           <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
//         </div>
//       </div>
//       <div>
//         <img
//           src={user.src}
//           alt=""
//           style={{
//             width: 50,
//             height: 50,
//             objectFit: "cover",
//             borderRadius: "50%",
//           }}
//         />
//       </div> */
//   }
// }

// export default NavBar;
