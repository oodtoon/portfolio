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
        <h1 className="about-title">Hi! my name is Brody</h1>
        <img className="about-img" alt="brody" />
        <p className="about-msg">
          I am a junior web developer with a knack for solving bugs in my code riiiight as I'm about to fall asleep.
        </p>
      </Box>
      <Box className="skills-container">
        <h1 className="skilles-title">My tools so far</h1>
        <Box className="skill-items" style={borderStyle}>
          <span className="skill">JavaScript</span>
          <span className="skill">TypeScript</span>
          <span className="skill">React</span>
          <span className="skill">Svelte</span>
          <span className="skill">Material UI</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Express</span>
          <span className="skill">Colyseus</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">Git</span>
        </Box>
      </Box>
      <Box className="objective-container">
        <h1>What I am looking for</h1>
        <Box>
          <p>
            A role where I can help by building out either web pages or an internet application. I'd also love to be part of a supportive team that can get me up to speed with their current technologies and give feedback on my code so I can improve it to the necessary standard.
          </p>
          <p>In need of a junior dev to join your team? Do I have the tools and the mindset you're looking for? <a href="/contact">Contact me!</a></p>
        </Box>
      </Box>

      <Box className="interests-container">
        <h1>My Interests</h1>
        <Box class="interests">
          <div><span>Coding</span> - Since I have started building projects I haven't been able to put the computer down. I don't know why, I just find the ability to manipulate pixels on the screen so cool and rewarding.</div>
          <div><span>Pool</span>- I'm pretty good at pool...billiards that is. Think you can beat me? </div>
          <div><span>YouTube</span>- I started a YouTube channel because I thought the world of pool was missing personality. Check out some jokes and even some cool trick shots on my channel! Oh, and please like and subscirbe!</div>
        </Box>
      </Box>
    </>
  );
};

export default About;
