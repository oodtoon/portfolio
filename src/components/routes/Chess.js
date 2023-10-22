import ProjectDescription from "../ProjectDescription";
import chess from "../../static/test.png"

const introParagraphs = [
  {
    line: "This is a paired programming project that I made with a Senior Front End developer.",
    id: 1,
  },
  {
    line: "What started as something small for me to just understand Object Orient Programming turned into a full fledged app that you can use today!",
    id: 2,
  },
  {
    line: "You have the ability to play online either on the same computer or over the internet with a friend. And if you're really into studying the game, you can even export the game file.",
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
      "Initially, this app was built using web components. However, later when we introducted routing with Svelte, we thought we should just migrate  everything to Svelte. I not only had to learn Svelte, but I also had to do an entire app migration from web components to Svelte. What did I learn? Move fast and break things.",
    id: 2,
  },
  {
    title: "TypeScript",
    solution:
      "Since the project was getting bigger, we had to keep track of types as a safeguard (as well as for beneifts like auto-complete). I learned the basics of TypeScript and then was tasked with removing all TypeScript errors from the files. It took a while and I had a lot of questions, but I came out the other side with a better understanding of TypeScript as well as an understanding of how to deal with TypeScript errors using documentation and other resources.",
    id: 3,
    },
  {
    title: "Git and Rebasing",
    solution:
      "Git was a confusing beast. I only knew how to commit. However, in order to review the code I was creating, the Senior Developer I was working with requested I make Pull Requests for them to review prior to merging them. I ended up creating a lot of merge conflicts because using Git this way was so new to me. However, after working through painful and large conflicts within rebasing, I learned good Git practices and how to do git rebasing.",
    id: 4
    },
  {
    title: "Naming",
    solution:
      "The bigger the app became, the more frequently we needed to use functions or variables with similar names. In order to prevent confusion, I worked to make sure function, variable, and parameter names were updated to be clear and concise. This was crucial in making things readable and to take advantage of certain preExisting properties such as toString().",
    id: 5
    },
  {
    title: "Working With Others",
    solution:
      "I don't know if this was a challenge, but even though I did a lot of the work, I still worked a long side another developer. This helped me get better at communicating my ideas for others to understand. Additionally, I was always thankful for his feedback and made the necesarry updates. Coding has no place for ego. I'm not looking to prove myself, I'm looking to learn as much as I can to make the best code possible.",
    id: 6
    },
];

const Chess = () => {

  return (
    <>
      <ProjectDescription
        title="Chess"
        introParagraphs={introParagraphs}
        challenges={challenges}
        img={chess}
      />
     
    </>
  );
};

export default Chess;
