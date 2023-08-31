import ChallengeDescription from "./ChallengeDescription";
import Line from "./Line";

const ProjectDescription = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <div>
        {props.introParagraphs.map((paragraph) =>
          paragraph.anchor ? (
            <>
              {" "}
              <Line paragraph={paragraph.line} anchor={paragraph.anchor} />
            </>
          ) : (
            <Line paragraph={paragraph.line} />
          )
        )}
      </div>

      <p></p>
      <h2>Challenges and What I Learned</h2>
      <ul>
        {props.challenges.map((challenge) =>
          challenge.anchor ? (
            <li class="challenge">
              <ChallengeDescription
                title={challenge.title}
                solution={challenge.solution}
                anchor={challenge.anchor}
              />
            </li>
          ) : (
            <li class="challenge">
              <ChallengeDescription
                title={challenge.title}
                solution={challenge.solution}
              />
            </li>
          )
        )}
        <br />
      </ul>
    </>
  );
};

export default ProjectDescription;
