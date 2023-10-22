import ProjectDescription from "../ProjectDescription";
import scriptBanner from "../../static/scriptOrgBanner.png"

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
      "Rendering the correct scripts based on filters selected was a challenge with just conditional statements. However, after learning the some() and every() methods on arrays I was able to get the filters to react correctly.",
    id: 1
    },
  {
    title: "Saving Data To Server",
    solution:
      "Since I wasn't saving information to a MongoDB database, I had to make my own IDs for the items. I didn't realize you can't have decimals for IDs but once removing them everything worked perfectly.",
    id: 2
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
      />
    </>
  );
};

export default ScriptOrganizer;
