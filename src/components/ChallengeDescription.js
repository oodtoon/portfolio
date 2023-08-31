const ChallengeDescription = (props) => {
  return (
    <>
      <span>
        <span class="challenge-title">{props.title}</span> - {props.solution}{" "}
        {props.anchor && <a href={props.anchor}>here.</a>}
      </span>
    </>
  );
};

export default ChallengeDescription;
