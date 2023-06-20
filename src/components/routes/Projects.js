import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import "../../App.css";

const Projects = () => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };

  return (
    <>
      <Box className="projects-container">
        <h1 className="projects-title">My projects</h1>
        <Box className="projects-grid">
          <div className="project-item medium" style={borderStyle}>
            1
          </div>
          <div className="project-item large" style={borderStyle}>
            2
          </div>
          <div className="project-item medium" style={borderStyle}>
            3
          </div>
          <div className="project-item small" style={borderStyle}>
            4
          </div>
          <div className="project-item tall" style={borderStyle}>
            5
          </div>
          <div className="project-item wide" style={borderStyle}>
            6
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
