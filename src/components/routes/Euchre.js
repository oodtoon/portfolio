import ProjectDescription from "../ProjectDescription";

const introParagraphs = [
  {
    line: "Euchre is a card game played with 4 people that is mostly played in Michigan (although it makes its appearance in other midwest states occasionally). The value of the cards dynamically changes based on a lot of conditions in play. So with Svelte being a very reactive language, I thought this would be a good project to build with it so I could learn Svelte.",
    id: 1,
  },
  {
    line: "Euchre is a lot of fun! If you want to learn, you can check out the rules of the game",
    anchor: "https://bicyclecards.com/how-to-play/euchre",
   id: 2,
  },
];

const challenges = [
  {
    title: "Updating Card Values",
    solution:
      "I initially tried to update card values with 'if...else' statements. This lead to a lot of bugs. I found that passing and alerting card states within the card object easily made the updates I needed with little, or even no, 'if..else' statements. And more importantly, no bugs! Note to self, data flow is important.",
    id: 1,
  },
  {
    title: "Learning Svelte",
    solution:
      "I cannot really say that this was a challenge per say, because well...Svelte is super user firendly! Especially if you already understand how front-end libraries work. But I still needed to take the time to actually learn the library. And thanks to great documentations and tutorials, I was able to pick up Svelte in no time and finish this project fairly quickly.",
    id: 2,
  },
  {
    title: "Disassembling a Monolith App",
    solution:
      "I started with just putting everything on one Svelte page, and while everything worked, it was just too big. So I broke it up into smaller components which took some time and thought on how to move everything and understand where certain functions should live. Once I got going, I found that I could make components smaller than I ever thought. But I kept going to make the code as readable as possible.",
    id: 3,
  },
];

const Euchre = () => {
  return (
    <ProjectDescription
      title="Euchre"
      introParagraphs={introParagraphs}
      challenges={challenges}
    />
  );
};

export default Euchre;
