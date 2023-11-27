import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import "../../App.css";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";

import Resume from "../../static/resume.pdf";

import Link from "@mui/material/Link";
import ReactIcon from "../icons/ReactIcon";
import SvelteIcon from "../icons/SvelteIcon";
import MaterialUIIcon from "../icons/MaterialUIIcon";
import MongoDBIcon from "../icons/MongoDBIcon";
import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";
import GitIcon from "../icons/GitIcon";
import ExpressIcon from "../icons/ExpressIcon";
import ReactRouterIcon from "../icons/ReactRouterIcon";

import Colyseus from "../../static/colyseus.png";
import DownloadIcon from "../icons/DownloadIcon";

const endorsements = [
  {
    person: "David",
    title: "Senior FE Dev",
    praise: "He's amazing. Stunning and brave!",
  },
  {
    person: "Cindy",
    title: "Mother",
    praise: "David's right, he's amazing.",
  },
];

const About = () => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };

  return (
    <>
      <Box className="about-section-container about-title-container">
        <h1 className="about-title">Hello! My name is Brody</h1>
        <p className="about-msg">
          I am a junior web developer with a knack for solving bugs in my code
          riiiight as I'm about to fall asleep.
        </p>

        <h2 className="resume-title sub-title">My Resume</h2>
        <span className="resume-link">
          <Link download="Brody_Blair_Resume.pdf" href={Resume} color="a.main">
            Download Here
          </Link>
          <DownloadIcon />
        </span>
      </Box>
      <Box className="skills-container">
        <h2 className="skills-title sub-title">My Tools So Far</h2>
        <Box className="skill-items" style={borderStyle}>
          <span className="skill">
            JavaScript <JavaScriptIcon />
          </span>
          <span className="skill">
            TypeScript <TypeScriptIcon />
          </span>
          <span className="skill">
            React <ReactIcon />
          </span>
          <span className="skill">
            React Router <ReactRouterIcon />
          </span>
          <span className="skill">
            Svelte/SvelteKit <SvelteIcon />
          </span>
          <span className="skill">
            Material UI <MaterialUIIcon />
          </span>
          <span className="skill">
            MongoDB <MongoDBIcon />
          </span>
          <span className="skill">
            Express <ExpressIcon isDarkMode={theme.palette.mode === "dark"} />
          </span>
          <span className="skill">
            Colyseus{" "}
            <span>
              <img with="40" height="40" src={Colyseus} alt="colyseus icon" />
            </span>
          </span>
          <span className="skill">
            HTML <HTMLIcon />
          </span>
          <span className="skill">
            CSS <CSSIcon />
          </span>
          <span className="skill">
            Git <GitIcon />
          </span>
        </Box>
      </Box>
      {/* <Box className="about-section-container">
        <h2 className="endorsements-title sub-title">Endorsements</h2>
        <Box className="endorsement-section">
          {endorsements.map((e, i) => (
            <div key={i} className="endorsement-container">
              <p>
                <em className="endorsement">"{e.praise}"</em>
              </p>
              <div className="signer">
                - {e.person}, <b>{e.title}</b>
              </div>
            </div>
          ))}
        </Box>
      </Box> */}
      <Box className="about-section-container">
        <h2 className="sub-title">What I Am Looking For</h2>
        <Box>
          <p>
            A role where I can help by building out either web pages or an
            internet application. I'd also love to be part of a supportive team
            that can get me up to speed with their current technologies and give
            feedback on my code so I can improve it to the necessary standard.
          </p>
          <p>
            In need of a junior dev to join your team? Do I have the tools and
            the mindset you're looking for?{" "}
            <Link href="/contact" color="a.main">
              Contact me!
            </Link>
          </p>
        </Box>
      </Box>

      <Box className="about-section-container">
        <h2 className="sub-title">My Interests</h2>
        <Box className="interests">
          <div>
            <span>Coding</span> - Since I have started building projects I
            haven't been able to put the computer down. I don't know why, I just
            find the ability to manipulate pixels on the screen so cool and
            rewarding.
          </div>
          <div>
            <span>Pool</span> - I'm pretty good at pool...billiards that is.
            Think you can beat me?{" "}
          </div>
          <div>
            <span>YouTube</span> - I started a{" "}
            <Link
              color="a.main"
              href="https://www.youtube.com/channel/UCgsxmRR0n1s1YOAWCfh5_jg"
            >
              YouTube channel
            </Link>{" "}
            because I thought the world of pool was missing personality. Check
            out some jokes and even some cool trick shots on my channel! Oh, and
            please like and subscirbe!
          </div>
        </Box>
      </Box>
    </>
  );
};

export default About;
