import { useTheme } from "@emotion/react";

import ChallengeDescription from "./ChallengeDescription";
import Line from "./Line";

const ProjectDescription = (props) => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
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

      <p></p>
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
      <button
        className="banner"
        style={{ borderStyle, backgroundImage: `url(${props.img})` }}
      />
    </>
  );
};

export default ProjectDescription;
