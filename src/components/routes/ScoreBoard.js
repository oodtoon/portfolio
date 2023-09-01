import ProjectDescription from "../ProjectDescription"

const introParagraphs = [
  {line: "This is a basic score board app. It gives you the ability to keep track of mutliple games and ahears to the rules and times set."},
  {line: "This is an app that I use to keep track of pool games because sometimes it can get a little heated if you're in the middle of a tough match and someone forgets the score."}
]

const challenges = [
  { title: "", solution: ""},
  { title: "", solution: ""},
  { title: "", solution: ""}
]

const ScoreBoard = () => {
  return (
    <>
    <ProjectDescription title="ScoreBoard" 
    introParagraphs={introParagraphs}
    challenges={challenges}
    />
    </>
  )
}

export default ScoreBoard