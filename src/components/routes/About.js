import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import "../../App.css";

const About = () => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };

  return (
    <>
      <Box className="about">
        <h1 className="about-title">Hi my name is Brody</h1>
        <img className="about-img" alt="brody" />
        <div className="about-msg">I am a web developer </div>
      </Box>
      <Box className="skills-container">
        <h1 className="skilles-title">My tools so far</h1>
        <Box className="skill-items" style={borderStyle}>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Material UI</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Express</span>
        </Box>
      </Box>
      <Box className="objective-container">
        <h1>What I am looking for</h1>
        <Box>
          <p>
            A company where I can make an impact and also learn and grow my
            developer skills
          </p>
        </Box>
      </Box>

      <Box className="interests-container">
        <h1>My Interests</h1>
        <Box>
          <div>Coding</div>
          <div>Pool imgs</div>
          <div>Youtube imgs</div>
        </Box>
      </Box>
    </>
  );
};

export default About;
