import ProjectDescription from "../ProjectDescription";
import scriptBanner from "../../static/scriptOrgBanner.png";

const introParagraphs = [
  {
    line: "I made a tool to help me film my YouTube videos. This is something I actually use and makes my life easier.",
    id: 1,
  },
  {
    line: "When filming, things can get hectic and it can be tough to organize and know which scenes have been filmed already on the fly. This tool enables you track which scripts are completed and who is still needed. And incase you are filming somewhere without an internet connection, this tool requires no internet connection! It's just hooked up to local server",
    id: 2,
  },
  {
    line: "If you're interested, you can check out my YouTube channel",
    anchor: "https://www.youtube.com/@hobbies2seriously",
    id: 3,
  },
];

const challenges = [
  {
    title: "Creating Functional Fitlers",
    solution:
      "Learning new Array methods that I had never used before, such as some() and every(), made it possible for me to the filter scripts based on user preferences correctly.",
    id: 1,
  },
];

const ScriptOrganizer = () => {
  return (
    <>
      <ProjectDescription
        title="Script Organizer"
        introParagraphs={introParagraphs}
        challenges={challenges}
        img={scriptBanner}
        gitHubLink={"https://github.com/oodtoon/script-organizer"}
        isActive={false}
      />
    </>
  );
};

export default ScriptOrganizer;
