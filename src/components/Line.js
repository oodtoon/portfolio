import Link from '@mui/material/Link';

const Line = (props) => {
  return (
    <>
      <p>
        {props.paragraph} {props.anchor && <Link color="a.main"  href={props.anchor}>here.</Link>}
      </p>
    </>
  );
};

export default Line;
