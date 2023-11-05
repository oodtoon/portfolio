import { Box } from "@mui/material";
import Link from "@mui/material/Link";

const Links = () => {
  return (
    <>
      <Box className="links-container">
        <Link color="#FFF" className="link-nav" href="/">
          Home
        </Link>
        <Link color="#FFF" className="link-nav" href="/about">
          About
        </Link>
        <Link color="#FFF" className="link-nav" href="/contact">
          Contact
        </Link>
        <Link color="#FFF" className="link-nav" href="projects">
          Projects
        </Link>
      </Box>
    </>
  );
};

export default Links;
