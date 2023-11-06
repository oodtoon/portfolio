import { Box } from "@mui/material";
import Socials from "./routes/Socials";
import Links from "./Links";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  const colorStyle = {
    color: "#FFF",
  };
  return (
    <footer className="footer-container">
      <Box className="footer-content">
        <Box class="footer-info">
            Brody Portfolio
            <div>© {year} all rights reserved</div>
            <Socials colorStyle={colorStyle} />
        </Box>
        <Links />
      </Box>
    </footer>
  );
};

export default Footer;
