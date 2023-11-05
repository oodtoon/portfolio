import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../../App.css";
import Socials from "./Socials";

const Contact = () => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };

  const colorStyle = {
    color: theme.palette.mode === "dark" ? "#FFF" : "#000",
  };

  return (
    <>
      <Box className="contact">
        <h1 className="contact-title">How to reach me</h1>

        <Box className="contact-info" style={borderStyle}>
          <Box className="contact-types">
            <div>phone: (248) 330-5617</div>
            <div>email: brocbla@umich.edu</div>
            <div>carrier pigeon: 4742 N Sawyer Ave, Chicago, Il 60625</div>
          </Box>
          <Socials colorStyle={colorStyle}/>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
