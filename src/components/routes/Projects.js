import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import chess from "../../static/testProject.png";
import vsp from "../../static/VSP.png";
import script from "../../static/script.png";
import Link from "@mui/material/Link";

const Projects = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const buttonStyle = {
    color: "transparent",
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
    "&:hover": {
      boxShadow:
        theme.palette.mode === "dark" ? ".5em .5em #ff4500" : ".5em .5em black",
    },
  };

  const toProject = (link) => {
    navigate(link);
  };

  return (
    <>
      <Box className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <Box className="projects-grid">
          <Button
            onClick={() => toProject("/chess")}
            className="project-item medium"
            sx={{ ...buttonStyle, backgroundImage: `url(${chess})` }}
          >
            Chess
          </Button>
          <Box className="project-title-container medium">
            <Link className="project-title" color="a.main" href="/chess">
              Chess Website
            </Link>
          </Box>
          <Button
            onClick={() => toProject("/sales")}
            className="project-item medium"
            sx={{ ...buttonStyle, backgroundImage: `url(${vsp})` }}
          >
            Sales
          </Button>
          <Box className="project-title-container medium">
            <Link className="project-title" color="a.main" href="/sales">
              Sales Lead Tracker
            </Link>
          </Box>
          <Button
            onClick={() => toProject("/scriptorganizer")}
            className="project-item medium"
            sx={{ ...buttonStyle, backgroundImage: `url(${script})` }}
          >
            Script Organizer
          </Button>
          <Box className="project-title-container medium">
            <Link className="project-title" color="a.main" href="/scriptorganizer">
              Script Organizer
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
