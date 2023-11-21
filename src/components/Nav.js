import { AppBar, Switch, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import MenuIcon from "./icons/MenuIcon";
import ExitIcon from "./icons/ExitIcon";
import { useWindowSize } from "@uidotdev/usehooks";

const NavDropdown = (props) => {
  return (
    <>
      <Button
        className="dropdown-toggle"
        sx={{
          color: `${props.style}`,
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={props.handleToggle}
      >
        {props.openDropdown ? <ExitIcon /> : <MenuIcon />}
      </Button>
      {props.openDropdown && props.children}
    </>
  );
};

const Nav = (props) => {
  const size = useWindowSize();

  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDisplayToggle = () => {
    setOpenDropdown((prevDisplay) => !prevDisplay);
  };

  const isFullScreen = size.width > 480;

  const linkColorStyle = props.isDarkMode ? "#000" : "#FFF";
  const bgColorStyle = props.isDarkMode ? "#FFF" : "#000";

  const activeColorStyle = props.isDarkMode ? "#FFF" : "#000";
  const activeBgColorStyle = props.isDarkMode ? "#000" : "#FFF";

  return (
    <>
      <AppBar className="header">
        <Toolbar>
          {isFullScreen && (
            <nav>
              <NavDropdown
                style={linkColorStyle}
                openDropdown={openDropdown}
                handleToggle={handleDisplayToggle}
              >
                <DropdownMenu
                  handleToggle={handleDisplayToggle}
                  isOpen={openDropdown}
                  isMobile={false}
                />
              </NavDropdown>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? activeColorStyle : linkColorStyle,
                    backgroundColor: isActive
                      ? activeBgColorStyle
                      : bgColorStyle,
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
                    backgroundColor: isActive
                      ? activeBgColorStyle
                      : bgColorStyle,
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
                    backgroundColor: isActive
                      ? activeBgColorStyle
                      : bgColorStyle,
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
                    backgroundColor: isActive
                      ? activeBgColorStyle
                      : bgColorStyle,
                  };
                }}
              >
                Projects
              </NavLink>
            </nav>
          )}

          {!isFullScreen && (
            <NavDropdown
              style={linkColorStyle}
              openDropdown={openDropdown}
              handleToggle={handleDisplayToggle}
            >
              <DropdownMenu
                handleToggle={handleDisplayToggle}
                isOpen={openDropdown}
                isMobile={true}
              />
            </NavDropdown>
          )}

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
