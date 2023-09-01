import { AppBar, Switch, IconButton, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../App.css";

const Nav = (props) => {

  const linkColorStyle = props.isDarkMode ? "#000" : "#FFF";
  const bgColorStyle = props.isDarkMode ? "#FFF" : "#000";

  const activeColorStyle = props.isDarkMode ? "#FFF" : "#000";
  const activeBgColorStyle = props.isDarkMode ? "#000" : "#FFF";

  return (
    <>
      <AppBar className="header">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <nav>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? activeColorStyle : linkColorStyle,
                  backgroundColor: isActive ? activeBgColorStyle : bgColorStyle,
                };
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  color: isActive ? activeColorStyle : linkColorStyle,
                  backgroundColor: isActive ? activeBgColorStyle : bgColorStyle,
                };
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? activeColorStyle : linkColorStyle,
                  backgroundColor: isActive ? activeBgColorStyle : bgColorStyle,
                };
              }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/projects"
              style={({ isActive }) => {
                return {
                  color: isActive ? activeColorStyle : linkColorStyle,
                  backgroundColor: isActive ? activeBgColorStyle : bgColorStyle,
                };
              }}
            >
              Projects
            </NavLink>
          </nav>

          <span className="switch">
            <Switch
              onClick={props.handleDarkModeToggle}
              checked={props.isDarkMode}
            >
              Dark Mode
            </Switch>
          </span>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Nav;
