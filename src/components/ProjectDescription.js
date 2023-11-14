import { useTheme } from "@emotion/react";
import Link from "@mui/material/Link";
import ChallengeDescription from "./ChallengeDescription";
import Line from "./Line";
import { Button } from "@mui/material";
import ConstructionIcon from "./icons/ConstructionIcon";

const ProjectDescription = (props) => {
  const theme = useTheme();

  const linkStyle = {
    color: "transparent",
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
    "&:hover": {
      boxShadow:
        theme.palette.mode === "dark" ? ".5em .5em white" : ".5em .5em black",
    },
    marginBottom: "1em",
  };

  const buttonStyle = {
    color: "#FFF",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#ff4500"
    }
  }

  const handleDialog = () => {
    const dialog = document.querySelector(".dialog");
    dialog.show();
  };

  const closeDialog = () => {
    const dialog = document.querySelector(".dialog");
    dialog.close();
  };

  return (
    <>
      <h1>{props.title}</h1>
      <div>
        {props.introParagraphs.map((paragraph) =>
          paragraph.anchor ? (
            <>
              {" "}
              <Line
                paragraph={paragraph.line}
                anchor={paragraph.anchor}
                key={paragraph.id}
              />
            </>
          ) : (
            <Line key={paragraph.id} paragraph={paragraph.line} />
          )
        )}
      </div>

      <h2>Challenges and What I Learned</h2>
      <ul>
        {props.challenges.map((challenge) =>
          challenge.anchor ? (
            <li className="challenge" key={challenge.id}>
              <ChallengeDescription
                key={challenge.id}
                title={challenge.title}
                solution={challenge.solution}
                anchor={challenge.anchor}
              />
            </li>
          ) : (
            <li className="challenge" key={challenge.id}>
              <ChallengeDescription
                key={challenge.id}
                title={challenge.title}
                solution={challenge.solution}
              />
            </li>
          )
        )}
        <br />
      </ul>

      <h1>Check out {props.title} below:</h1>

      {props.isActive && (
        <Link
          href="https://some-guys-chess-website.vercel.app/"
          className="banner"
          target="_blank"
          sx={{
            ...linkStyle,
            backgroundImage: `url(${props.img})`,
          }}
        ></Link>
      )}
      {!props.isActive && (
        <div class="banner-container">
          <Button
            className="banner"
            sx={{
              ...linkStyle,
              minHeight: "198px",
              backgroundImage: `url(${props.img})`,
            }}
            onClick={handleDialog}
          ></Button>
          <dialog className="dialog">
            <div className="dialog-container">
              <div className="dialog-text-container">
                <p className="dialog-text">
                  {props.title} is currently under construction.{" "}
                  <ConstructionIcon />
                </p>{" "}
                <p className="dialog-text">How do you wish to proceed?</p>
              </div>
              <div className="dialog-actns">
                <Button onClick={closeDialog} className="dialog-btn" sx={buttonStyle}>Continue Reading</Button>
                <Link className="dialog-link" color="a.main" href={props.gitHubLink} target="_blank">{props.title} GitHub</Link>
                <Link className="dialog-link" color="a.main" href={"/projects"} onClick={closeDialog}>Check Out All Projects</Link>
              </div>
            </div>
          </dialog>
        </div>
      )}

      <div style={{ marginBottom: "2em" }}>
        <Link color="a.main" href={props.gitHubLink} target="_blank">
          View {props.title} on GitHub here!
        </Link>
      </div>
    </>
  );
};

export default ProjectDescription;
