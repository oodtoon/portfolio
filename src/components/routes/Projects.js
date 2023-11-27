import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import chess from "../../static/testProject.png";
import vsp from "../../static/VSP.png";
import script from "../../static/script.png";
import Link from "@mui/material/Link";
import ask from "../../static/AskLogo.png";

const projectsArray = [
  {
    title: "Chess",
    img: chess,
    link: "/chess",
    linkTitle: "Chess Website",
    y: "40%"
  },
  {
    title: "Ask Psychology",
    img: ask,
    link: "/askpsychology",
    linkTitle: "Ask Psychology Website",
    y: "60%",
  },
  {
    title: "Sales",
    img: vsp,
    link: "/sales",
    linkTitle: "Sales Lead Tracker",
    y: "40%",
  },
  {
    title: "Script Organizer",
    img: script,
    link: "/scriptorganizer",
    linkTitle: "Script Organizer",
    y: "40%",
  },
];

const Projects = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const buttonStyle = {
    color: "transparent",
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
    backgroundSize: "cover",
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
          <Box className="item-container">
            {projectsArray.map((project, i) => (
              <Button
                key={i + "b"}
                onClick={() => toProject(project.link)}
                className="project-item"
                sx={{ ...buttonStyle, backgroundImage: `url(${project.img})`, backgroundPositionY: `${project.y}` }}
              >
                {project.title}
              </Button>
            ))}
          </Box>
          <Box className="project-link-container">
            {projectsArray.map((project, i) => (
              <Box className="link-title-container" key={i + "l"}>
                <Link
                  className="project-link"
                  color="a.main"
                  href={project.link}
                >
                  {project.linkTitle}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
