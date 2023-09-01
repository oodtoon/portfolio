import { useTheme } from "@emotion/react";

import ChallengeDescription from "./ChallengeDescription";
import Line from "./Line";

const ProjectDescription = (props) => {
  const theme = useTheme();

  const borderStyle = {
    backgroundImg: `${props.img}`,
    backgroundSize: 'cover',
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
  };


  return (
    <>
      <h1>{props.title}</h1>
      <div>
        {props.introParagraphs.map((paragraph, index) =>
          paragraph.anchor ? (
            <>
              {" "}
              <Line
                paragraph={paragraph.line}
                anchor={paragraph.anchor}
                key={index}
              />
            
            </>
          ) : (
            <Line
              key={index}
              paragraph={paragraph.line}
            />
          )
        )}
      </div>

      <p></p>
      <h2>Challenges and What I Learned</h2>
      <ul>
        {props.challenges.map((challenge, index) =>
          challenge.anchor ? (
            <li className="challenge" key={index}>
              <ChallengeDescription
                key={index}
                title={challenge.title}
                solution={challenge.solution}
                anchor={challenge.anchor}
              />
            </li>
          ) : (
            <li className="challenge" key={index}>
              <ChallengeDescription
                key={index}
                title={challenge.title}
                solution={challenge.solution}
              />
            </li>
          )
        )}
        <br />
      </ul>
      <button className="banner" style={borderStyle} />
    </>
  );
};

export default ProjectDescription;
