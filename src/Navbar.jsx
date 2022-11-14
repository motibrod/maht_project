import React from "react";
import { Link, Route } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(80),
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
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 12 }}>
      <AppBar position="fixed">
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            ></IconButton>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    
                      <MenuItem onClick={popupState.close}><Route to="/about">Profile</Route></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">My account</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">History</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">
                        List of written blessing</Link>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">Logout</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">Q&A</Link></MenuItem>
                      <MenuItem onClick={popupState.close}><Link to="/about">Help</Link></MenuItem>
                    
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
          <div>
            <ButtonGroup
              color="inherit"
              variant="text"
              aria-label="text button group "
              margin="10px"
              sx={{ ml: 3 }}
            >
              <Button>עיברית</Button>
              <Button>English</Button>
            </ButtonGroup>
          </div>
          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
          <div>
            <Stack direction="row" spacing={2} sx={{ textAlign: "right" }}>
              <Avatar
                alt="Remy Sharp"
                src="Eazy_Gift_Logo.png"
                sx={{ width: 56, height: 56, marginLeft: 3 }}
              />
            </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default Navbar;