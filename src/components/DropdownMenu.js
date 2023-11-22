import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
// import { motion } from "framer-motion"
import { forwardRef, useEffect } from "react";

const DropdownMenu = forwardRef((props, ref) => {
  const theme = useTheme();

  const closeDropdown = props.handleToggle;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
        <div className="dropdown" ref={ref}>
          <DropdownItem link={"/"}>Home</DropdownItem>
          <DropdownItem link={"/about"}>About</DropdownItem>
          <DropdownItem link={"/contact"}>Contact</DropdownItem>
          <DropdownItem link={"/projects"}>Projects</DropdownItem>
          <DropdownItem link={"/key-bindings"}>Key Bindings</DropdownItem>

          {/* <DropdownItem link={"/blog"}>Blog</DropdownItem>
      <DropdownItem link={"/comics"}>Comics</DropdownItem>  */}
        </div>
      )}
      {!props.isMobile && (
        <div className="dropdown-fragment" ref={ref}>
          <DropdownItem link={"/key-bindings"}>Key Bindings</DropdownItem>
          <DropdownItem link={"/blog"}>Blog</DropdownItem>
          {/* <DropdownItem link={"/comics"}>Comics</DropdownItem> */}
        </div>
      )}
    </>
  );
});

export default DropdownMenu;
