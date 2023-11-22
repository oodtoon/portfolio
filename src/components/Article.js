const Paragraph = (props) => {
  return (
    <>
      {props.subheading && <h2 className="blog-title">{props.subheading}</h2>}
      {props.paragraph.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
};

const Article = (props) => {
  return (
    <>
      {props.article.map((a, i) => (
        <Paragraph subheading={a.subheading} paragraph={a.paragraph} key={i} />
      ))}
    </>
  );
};

export default Article;
