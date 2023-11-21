import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
// import { motion } from "framer-motion"

const DropdownMenu = (props) => {
  const theme = useTheme();

  const closeDropdown = props.handleToggle;

  const secondaryColor = theme.palette.mode === "dark" ? "#FFF" : "#000";
  const primaryColor = theme.palette.mode === "dark" ? "#000" : "#FFF";

  const linkStyle = {
    color: primaryColor,
    backgroundColor: secondaryColor,
    "&:hover": {
      color: secondaryColor,
      backgroundColor: primaryColor,
    },
    display: "flex",
    padding: "1em",
    cursor: "pointer",
    fontWeight: "800",
    textDecoration: "none",
  };

  const DropdownItem = (props) => {
    return (
      <div>
        <Link href={props.link} sx={{ ...linkStyle }} onClick={closeDropdown}>
          {props.children}
        </Link>
      </div>
    );
  };

  return (
    <>
      {props.isMobile && (
        <div className="dropdown">
          <DropdownItem link={"/"}>Home</DropdownItem>
          <DropdownItem link={"/about"}>About</DropdownItem>
          <DropdownItem link={"/contact"}>Contact</DropdownItem>
          <DropdownItem link={"/projects"}>Projects</DropdownItem>
          {/* <DropdownItem link={"/key-bindings"}>Key Bindings</DropdownItem>
      <DropdownItem link={"/blog"}>Blog</DropdownItem>
      <DropdownItem link={"/comics"}>Comics</DropdownItem> */}
        </div>
      )}
      {!props.isMobile && (
        <div className="dropdown-fragment">
          <DropdownItem link={"/key-bindings"}>Key Bindings</DropdownItem>
          {/* <DropdownItem link={"/blog"}>Blog</DropdownItem>
          <DropdownItem link={"/comics"}>Comics</DropdownItem> */}
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
