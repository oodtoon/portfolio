import ProjectDescription from "../ProjectDescription";
import chess from "../../static/test.png"

const introParagraphs = [
  {
    line: "This is a paired programming project that I made with a Senior Front End Developer.",
    id: 1,
  },
  {
    line: "What started as something small for me to just understand Object Orient Programming turned into a full fledged app that you can use today!",
    id: 2,
  },
  {
    line: "You have the ability to play on the same computer or over the internet with a friend. And if you're really into studying the game, you can even export the game file.",
    id: 3,
  },
];

const challenges = [
  {
    title: "Object Oriented Programming",
    solution:
      "This was the first time I ever used OOP. It was a great introduction into understanding the use cases of objects and how they can interract with each other.",
    id: 1,
  },
  {
    title: "Svelte and Migration",
    solution:
      "Initially built in JavaScript, due to the direction it was taking, we decided to migrate everything to Svelte. I learned Svelte and also migrated the entire app migration from web components to Svelte. What did I learn? Move fast and break things.",
    id: 2,
  },
  {
    title: "TypeScript",
    solution:
      "As the project grew, we had to keep track of types as a safeguard. I learned TypeScript and convereted the entire app from JavaScript to TypeScript.",
    id: 3,
    },
  {
    title: "Git and Rebasing",
    solution:
      "I learned and utilized standard version control with gitHub. This included commiting, pull requests, branching, some rebases, and resolving merge conflicts.",
    id: 4
    },
  {
    title: "Naming Variables",
    solution:
      "I utilized good naming practices to make the code readable and to ensure that the reader could determine the type the variable contained as well.",
    id: 5
    },
  {
    title: "Working With Others",
    solution:
      "I worked with a Senior Front End Developer to make this app. I was always thankful for his feedback and made the necesarry updates. Coding has no place for ego. I'm not looking to prove myself, I'm looking to learn as much as I can to make the best code possible.",
    id: 6
    },
];

const Chess = () => {

  return (
    <>
      <ProjectDescription
        title="Chess Website"
        introParagraphs={introParagraphs}
        challenges={challenges}
        img={chess}
        projectLink={"https://some-guys-chess-website.vercel.app/"}
        gitHubLink={'https://github.com/oodtoon/chess'}
        isActive={true}
        isRepeat={false}
      />
     
    </>
  );
};

export default Chess;
