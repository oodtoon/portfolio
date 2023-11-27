import ProjectDescription from "../ProjectDescription";
import askImg from "../../static/AskLogo.png";

const introParagraphs = [
  {
    line: "A new psychology practice created their own website, however it was a little unprofessional. They had a lot of info on it and it was a monolith with no navigation.",
    id: 1,
  },
  {
    line: "So I reached out to build their website for them",
    id: 2,
  },
  {
    line: "I didn't do any styling myself. I based the website feel off of their previously built website. However, I still built the website from scratch with only a template to guide me.",
    id: 3,
  },
  {
    line: "Now they have a professional looking website and are even more excited to grow their business.",
    id: 4,
  },
];

const challenges = [
  {
    title: "Repetition",
    solution:
      "The website design utilized many different small parts that repeated. Instead of building each card individually, I made components to display these cards and sections dynamically. I had to figure out how to structure my data however to allow any customizations necesarry.",

    id: 1,
  },
  {
    title: "Responsivness",
    solution:
      "Getting the page to respond to smaller screen sizes was tough, but it was made easier since I initally built it with responsive features in mind. Taking the time and focusing on what had fixed widths and heights helped me make the page react in the appropriate way.",
    id: 2,
  },
];

const Ask = () => {
  return (
    <>
      <ProjectDescription
        title="Ask Psychology Services Website"
        introParagraphs={introParagraphs}
        challenges={challenges}
        img={askImg}
        projectLink={"https://askpsychology.vercel.app/"}
        gitHubLink={"https://github.com/oodtoon/askwebsite"}
        isActive={true}
        isRepeat={true}
      />
    </>
  );
};

export default Ask;
