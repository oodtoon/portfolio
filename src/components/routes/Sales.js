import ProjectDescription from "../ProjectDescription";
import sales from "../../static/VSPBanner.png";

const introParagraphs = [
  {
    line: "My company needed our sales team track our leads with a specfic format, however, there was no easy way to implement the required info into in our interal CRM (customer relationship management) tool.",
    id: 1,
  },
  {
    line: "So I built an app to do just that.",
    id: 2,
  },
  {
    line: "Now you can stay on top of sales leads and ensure they are progressing in the right direction. Sales reps can track and make sure they have all the info they need from a customer and know how close an opportunity is to closing.",
    id: 3,
  },
  {
    line: "It comes with full login, user creation, and password reset functionality! But don't worry, you can just use the demo login info provided so you don't need to start with no opportunity data.",
    id: 4,
  },
];

const challenges = [
  {
    title: "Material UI - Dark Mode",
    solution:
      "I utilized Material UI and their documentation to get a customer dark mode working while also learning more about MUI library",
    id: 1,
    },
  {
    title: "Dynamic Updates",
    solution:
      "I made updating info within each sales lead as easy as possible for the user. All lead creations and inline edits were saved to a MongoDB database to perseist lead data.",
    id: 2,
    },
  {
    title: "CSS",
    solution:
      "I took the time to learn CSS through a course by Kevin Powell and built the landing page to test my layout and CSS skills. Kevin's a great teacher! If you want to learn more CSS you can check out Kevin",
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
        gitHubLink={"https://github.com/oodtoon/VSP"}
      />
    </>
  );
};

export default Sales;
