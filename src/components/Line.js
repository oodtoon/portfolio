const Line = (props) => {
  return (
    <>
      <p>
        {props.paragraph} {props.anchor && <a href={props.anchor}>here.</a>}
      </p>
    </>
  );
};

export default Line;
