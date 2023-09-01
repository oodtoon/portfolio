import Link from "@mui/material/Link";

const ChallengeDescription = (props) => {

  return (
    <>
      <span>
        <span className="challenge-title">{props.title}</span> - {props.solution}{" "}
        {props.anchor && (
          <Link href={props.anchor} color="a.main">
            here.
          </Link>
        )}
      </span>
    </>
  );
};

export default ChallengeDescription;
