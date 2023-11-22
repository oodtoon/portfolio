import hobby from "./../../static/poolbar.png"
import SvelteVsReact from "./../../static/SvR.png";
import icons from "./../../static/icons.png";
import learning from "./../../static/SchoolVsSelf.png";

export const blogs = [
  {
    image: SvelteVsReact,
    title: "Svelte is Better than React",
    article: [
      {
        subheading: null,
        paragraph: [
          "React is a framework made by Facebook. So it has to be good, right? Or is it just used because it's the norm?",
          "Now, I am a junior developer so it’s not like I know a lot, however, I have used both React and Svelte in my personal projects. And well, Svelte is better than React.",
          "I have made the statement. Deal with it. I support the current thing.",
          "Why is Svelte better than React though?",
        ],
      },
      {
        subheading: "Reactivity",
        paragraph: [
          "I love reactivity. In React, you don't get reactivity. You get useState. And you have to manage your state manually.",
          `Svelte's reactivity automatically tracks changes to assigned variables and triggers updates. This simplifies code and reduces the chances of introducing bugs related to state management`,
          `By the way, to make something reactive in Svelte all you need is to put "$:" before the variable or function. Svelte used the "$" sign for this because reactivity is money.`,
        ],
      },
      {
        subheading: "Code Simplicity",
        paragraph: [
          "One of the most notable features of Svelte is its simplicity. Unlike React, which requires an additional layer (JSX or templates) to describe the UI, Svelte allows developers to write code that directly represents the final output. It uses a straightforward syntax that's closer to vanilla JavaScript, making it easier to read and write.",
          "An example of this is {#if...else} blocks within the HTML section of a svelte component. Want to render something conditionally? No need to write out an entire function. Just throw in an {#if...else} block around the HTML tags or even inside the HTML tags and you're good to go! (or you don't go if the condition isn't met)",
          `And as a desparate blender infomercial salesman at 3am would say...."But wait...there's more!"`,
          "Svelte promotes scoped styles by default. Styles defined within a Svelte component stay encapsulated and don’t leak out, reducing the potential for unintended style conflicts. This built-in encapsulation enhances code modularity and makes it easier to maintain large codebases.",
        ],
      },
      {
        subheading: "Syntactical Sugar",
        paragraph: [
          "Svelte's syntactical sugar is amazing and makes passing props a breeze. This could be under the code simplicity section, since it basically achieves the same thing, but it's important enough to stand out on it's own.",
          "First and foremost, if you want to pass a prop to a component and it will maintain the same name all you have to write is {variableName} within the component tags. No need to redaclare is at variableName={variableName}.",
          "If a boolean prop is true, just pass the variable name with no brackets like 'isTrue'.",
          "Want to toggle a class in a component? Within the HTML tag you want to toggle just write class:toggleableStyle={condition}. Is the class name also a boolean variable? Then you can simplify it more and just write class:toggleableStyle",
          "There are even more ways to simplify statements in Svelte but I won't cover them here. I encourage you to look up their documentation if you want to see more!",
        ],
      },
      {
        subheading: "Built In Animations",
        paragraph: [
          "Are you using React and want to add in an animation? Install a library. Now you want to manage your data in a store? Install a library. Need a good UI? Install a library. But that's not all, your code just broke. Fix it.",
          "How about no.",
          "Unlike React, Svelte provides built-in support for animations and transitions. The framework makes it relatively easy to create smooth, performant animations without relying on third-party libraries or complex configurations, and this can save a lot of time",
        ],
      },
      {
        subheading: "Store",
        paragraph: [
          "Hinted at while discussing animations, Svelte has a built in store for you to easily share data between components by subscribing to the store.",
          "but it gets better.",
          "The store is reactive so when svelte notices a change, it updates the store, and if you're subscribed to the store, you get those updates too.",
        ],
      },
      {
        subheading: null,
        paragraph: [
          "These are just some of the reasons why I as a junior developer like Svelte more than React. I'm sure there are more. And I'm sure there are more important reasons why Svelte is better than React. Like the fact that Svelte shifts most of it's work to compile time so it generates highly optimized, plain JavaScript code during build, resulting in smaller bundle sizes and improved runtime performance, or that Svelte doesn't use a virtual DOM. Instead it directly updates the DOM when the state changes, eliminating the need for additional diffing algorithms.",
          "Regardless, Svelte it better than React. If you haven't learned Svelte yet, spend 2 minutes trying to learn it. It's so simple and intuitive that's basically all the time you'll need to pick it up and start using Svelte.",
        ],
      },
    ],
    id: 1,
  },
  {
    image: learning,
    title: "You Learn More Outside of a University",
    article: [
      {
        subheading: null,
        paragraph: [
          "For some reason, society seems to not take people that are self taught seriously. People that are self taught are a mistake. They are a person that shouldn't be acknowledged. At the risk of sound like Rodney Dangerfield, they get no respect.",
          "I do not like this sentiment. And I don't like the snap judgement. And as someone that has both taught myself programming and wasted my time at a University, I have found that being self taught can be way more beneficial.",
          "And yes, being self taught can save you tons of money, and even with that being a major plus, I won't even mention it again.",
        ],
      },
      {
        subheading: "The Internet",
        paragraph: [
          "I think the internet is great. People often reducivitly claim that we made the internet to pass information and all we see are cat videos. That's just not true",
          "First off, I love the cat videos. But second, the internet is filled with information from passionate individuals that care about their craft or hobby.",
          "Because of the internet, I have learned how to play pool. Not only do I know how to play pool, I am very good at pool. I am self taught and I can beat almost anyone. I learned how to rock climb via the internat because people are passionate about climbing and want to share how to correctly climb. Even crazier, I have learned how to program because of the internet. Literal professional programmers that love programming have made free courses to share the skill so that others can become proficient programmers from the ground up. I took a free online course called 'FullStack Open.' And if this matters to you, it was a Univeristy level course that got you Unviesrity credit upon completion. So I got college credit for being self taught, although the credit is only redeemable in Norway...",
          "The internet gets a bad wrap for being a place where people only learn conspiracy theories or waste time on Facebook. The internet is a tool with tons of great information. You just need to know how to use it. If you think the internet is only social media, you need to learn how to use the interet. You should also probably stop wasting so much time on social media.",
        ],
      },
      {
        subheading: "Self Discipline",
        paragraph: [
          "Being self taught means that you don't just learn the skills you're after, it also means learning and mastering the path of self-motivation and self-discipline. Universities put an emphasis on learning coursework without focusing on the personal development. They provide a structured environment with deadlines and accountability, self-learners must self-regulate their study habits and stay motivated to progress. This self-discipline is a valuable trait that should be noted instead of disregaurded.",
        ],
      },
      {
        subheading: "Cultivating Curiosity",
        paragraph: [
          "Learning on your own cultivates curiosity. By being self taugh, you learn to ask 'What else is out there?' and 'What else can I learn?'",
          "Sure, you may still end up taking a course. Whether that's a paid online course or a free class on YouTube. However, you had to look and search for that. You become resourceful. You know how to look for places to learn. You aren't beholden to a class room or an instructor.",
          "What's great about school? They give you the guard rails. You just sit there and say…'What's next?' You don't need to focus on the exploration because the exploration has already been done. You now don't know how to look into things yourself. This may sound silly, but curiosity is a muscle. And you need to work it in order to know how to look into things. This is a muscle developed by being self taught rather than sitting in a classroom.",
        ],
      },
      {
        subheading: null,
        paragraph: [
          "Ultimately, being self taught or going to school, what's the difference if you can still learn what you set out to?",
          "I went through University and I do feel like I personally squandered the opportunity. But I think that I am proof, and so are a lot of other people that come out of the other side of the money making machine (I know I said I wouldn't mention money at the start but I couldn't help myself), that going to University doesn't mean you come out with a more useful set of skills than others.",
          "Call me self taught in a dismissive all you want, I wear the self-taught title with a badge of honor. And I think others should be happy to work with others toting the title as well.",
          "I have a lot to learn. I am excited to learn. I am humble enough to learn and admit when I don't know something. I am and always will be a self taught developer.",
        ],
      },
    ],
    id: 2,
  },
  {
    image: icons,
    title: "Tools Are Given Way Too Cool of Names",
    article: [
      {
        subheading: null,
        paragraph: [
          'Listen, I get it. You need to make your tool that enables me to import files easily sound cool so that I think "wow, I should use that."',
          "It's marketing.",
          `But honestly, all it is, is a way for me to import files with less lines of code. It doesn't need to be called "Lightning Bean" or whatever.`,
        ],
      },
      {
        subheading: "Mountain Out Of a Mole Hill",
        paragraph: [
          "Maybe I'm just a junior developer that doesn't understand enough, but the flashy names seem to build up a big expectation as to what the tool is going to do. And after installing it, nothing cool happens. You just get to write code a little different. Or you need to refactor.",
          "I think it does a diservice to the tool. Because it builds up an expectation that something big is going to happen. And then you're let down or unimpressed when all you're doing is now using different methods created by the library or tool.",
          "Now, I will admit, sometimes the functionality that these methods do is pretty useful. Such as allowing you to create an online multiplayer game room or creating a way to send an email just with JavaScript. However, it doesn't change the fact, that the way to implement these things is just with using methods enabled by the new installation.",
        ],
      },
      {
        subheading: "The Reality",
        paragraph: [
          "Now this might be a triggering statement, but ultimately, outside of problem solving and architecting, when writing code, a developer is just sitting at a computer typing lines of code. These names make it seem like by using this tool, writing code will all of a sudden be a cool adctivity. Or it'll someone be filled with action and adventure.",
          "No.",
          "All that is happening is that you are still sitting at a computer writing code, albeit, maybe with a little convinience layered on top.",
          "But remember, you aren't out there jumping out of airplanes or ejecting from a car, your sitting in front of a computer making pixels move.",
        ],
      },
      {
        subheading: "When To Use Cool Names",
        paragraph: [
          "Despite my previous arguments, I actually really enjoy coding. I think it's fun and you can build some crazy things on the computer that solve real problems. Some small, like helping improve programmers' convinences, and some large, like sending rockets to mars. I just think, if you're going to name something cool, please reserve it for the rockets or the users. Don't make the tool that simplifies syntax and have a name that overshadows a tool that can really change the world.",
        ],
      },
    ],
    id: 3,
  },
  // { image: hobby, title: "Hobbies are important", article: [], id: 4 },
];