import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import chess from "../../static/testProject.png"
import vsp from "../../static/VSP.png"
import script from "../../static/script.png"


const Projects = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };

  const toProject = (link) => {
    navigate(link);
  };

  return (
    <>
      <Box className="projects-container">
        <h1 className="projects-title">My projects</h1>
        <Box className="projects-grid">
          <button
            onClick={() => toProject("/sales")}
            className="project-item medium"
            style={{...borderStyle, backgroundImage: `url(${vsp})`}}
          >
            Sales
          </button>
          <button
            onClick={() => toProject("/chess")}
            className="project-item large"
            style={{...borderStyle, backgroundImage: `url(${chess})`}}
          >
            Chess
          </button>
          <div
            onClick={() => toProject("/euchre")}
            className="project-item medium"
            style={borderStyle}
          >
            Euchre
          </div>
          <div
            onClick={() => toProject("/snake")}
            className="project-item small"
            style={borderStyle}
          >
            Snake
          </div>
          <div
            onClick={() => toProject("/scoreboard")}
            className="project-item tall"
            style={borderStyle}
          >
            Scoreboard
          </div>
          <div
            onClick={() => toProject("/scriptorganizer")}
            className="project-item wide"
            style={{...borderStyle, backgroundImage: `url(${script})`}}
          >
            Script Organizer
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Projects;