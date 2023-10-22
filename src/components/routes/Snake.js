import ProjectDescription from "../ProjectDescription";

const introParagraphs = [
  {
    line: "This was the first project that I built. I had watched tutorials on how to make basic games with JavaScript and I wanted to see if I really understood what I leared. So I hopped on the computer and built snake!",
    id: 1,
  },
  {
    line: "It's weird looking back at this now. A lot of times I feel like I don't know anything but seeing this makes me realize how far I've come.",
    id: 2,
  },
];

const challenges = [
  { title: "", solution: "", id: 1 },
  { title: "", solution: "", id: 2 },
  { title: "", solution: "", id: 3 },
];

const Snake = () => {
  return (
    <>
      <ProjectDescription
        title="Snake"
        introParagraphs={introParagraphs}
        challenges={challenges}
      />
    </>
  );
};

export default Snake;
