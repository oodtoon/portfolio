import ProjectDescription from "../ProjectDescription";
import sales from "../../static/VSPBanner.png";

const introParagraphs = [
  {
    line: "My company wanted our sales team to start tracking our sales opportunities with a specfic format, however, there was no easy way to implement a template or format in the desired styles in our interal CRM (customer relationship management) tool. So I built an app to do just that.",
    id: 1,
  },
  {
    line: "Even though my company ultimately would not allow for me to connect to our CRM, I made it so that we can still easily transfer data with the fewest clicks by copying everythign to the clip board. Updating an opportunity's info is also easy because everything can be edited inline (unlike the professional grade software we use) and changes would be saved to the database.",
    id: 2,
  },
  {
    line: "This tool is great to stay in compliance with upper management's needs while also serving as a check box for the sales rep. They can track and make sure they have all the info they need from a customer and know how close an opportunity is to closing.",
    id: 3,
  },
  {
    line: "It comes with full login functionality and user creation! But don't worry, you can just use the demo login info provided so you don't need to start with no opportunity data.",
    id: 4,
  },
];

const challenges = [
  {
    title: "Material UI - Dark Mode",
    solution:
      "Material UI is easy to use if it's straight out of the box. However, to customize certain things, such as a dark mode theme, well it takes a little more. Even though it was a struggle and took a while to implement, I was able to utilize the Material UI documentation to get dark mode working while also learning more about the library",
    id: 1,
    },
  {
    title: "Dynamic Updates",
    solution:
      "Each page had to access updated information so this app really made sure that I understood how to to get new updated info to components in React. Not only that but I also had to make sure that the necesarry updates were happening in the backend whenever and inline edit to a field within an opportunity was made.",
    id: 2,
    },
  {
    title: "CSS",
    solution:
      "I can't lie, going into this project my understanding of CSS was very limited. However, as that became a glaring problem, I took the time to learn CSS through a course by Kevin Powell and built the landing page to test my layout and CSS skills. Kevin's a great teacher! If you want to learn more CSS you can check out Kevin",
    anchor: "https://www.youtube.com/@KevinPowell/featured",
    id: 3,
  },
];

const Sales = () => {
  return (
    <>
      <ProjectDescription
        title="Sales Tracking Tool"
        introParagraphs={introParagraphs}
        challenges={challenges}
        img={sales}
      />
    </>
  );
};

export default Sales;
