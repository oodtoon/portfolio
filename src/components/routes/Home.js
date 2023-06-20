import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "../../App.css";
import { useTheme } from "@emotion/react";

const quotes = [
  [
    "“All our dreams can come true, if we have the courage to pursue them.”",
    "—Walt Disney",
  ],
  ["“The secret of getting ahead is getting started.”", "—Mark Twain"],
  [`“It’s hard to beat a person who never gives up.”`, "—Babe Ruth"],
  ["“Whatever you are, be a good one.”", "―Abraham Lincoln"],
  [`“Go the extra mile. It’s never crowded there.”`, "―Dr. Wayne D. Dyer"],
  [
    `“You don’t need to see the whole staircase, just take the first step.”`,
    "―Martin Luther King Jr",
  ],
  ["“A winner is a dreamer who never gives up.”", "―Nelson Mandela"],
  [
    "“Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.”",
    "-Samuel Beckett",
  ],
  [`“You can't stop the waves, but you can learn to surf.”`, "-Jon Kabat-Zinn"],
  [
    '"Our greatest glory is not in never falling, but in rising every time we fall."',
    "-Confuius",
  ],
  [
    `"It's amazing how much you can learn if your intentions are truly earnest."`,
    "-Chuck Berry",
  ],
];

const Home = () => {
  const theme = useTheme();

  const borderStyle = {
    border:
      theme.palette.mode === "dark" ? "solid 3px white" : "solid 3px black",
    boxShadow:
      theme.palette.mode === "dark" ? "1em 1em white" : "1em 1em black",
  };

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <>
      <Box className="quote-content">
        <Box className="quote-container" style={borderStyle}>
          <em className="quote">{quote[0]}</em>
          <div className="author">{quote[1]}</div>
        </Box>
      </Box>
    </>
  );
};

export default Home;
