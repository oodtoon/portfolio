import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = (props) => {
  return (
    <>
      <Box className="socials">
        <a className="social-link" href="https://github.com/oodtoon">
          <FontAwesomeIcon icon={faGithub} style={props.colorStyle} />
        </a>
        <a
          className="social-link"
          href="https://www.youtube.com/@hobbies2seriously"
        >
          <FontAwesomeIcon icon={faYoutube} style={props.colorStyle} />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/brody-blair-46ab72164"
        >
          <FontAwesomeIcon icon={faLinkedin} style={props.colorStyle} />
        </a>
      </Box>
    </>
  );
};

export default Socials
