import { useEffect, useState } from "react";
import { vimMotionBindings } from "../static/KeyBindings/vim";
import { vimInsertBindings } from "../static/KeyBindings/vim";
import { vimNormalBindings } from "../static/KeyBindings/vim";
import { vimVisualBindings } from "../static/KeyBindings/vim";

import { vsCodeEditingBindings } from "../static/KeyBindings/vsCode";
import { vsCodeCursorBindings } from "../static/KeyBindings/vsCode";
import { vsCodeMultiBindings } from "../static/KeyBindings/vsCode";
import { vsCodeNavBindings } from "../static/KeyBindings/vsCode";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const vsPracticeBindings = [
  ...vsCodeEditingBindings,
  ...vsCodeCursorBindings,
  ...vsCodeMultiBindings,
  ...vsCodeNavBindings,
];

const vimPracticeBindings = [
  ...vimMotionBindings,
  ...vimInsertBindings,
  ...vimNormalBindings,
  ...vimVisualBindings,
].filter((b) => b.sequence.length <= 1);

const Practice = (props) => {
  const theme = useTheme();

  const [points, setPoints] = useState(0);

  const [correctAnswerStyle, setCorrectAnswerStyle] = useState(false);
  const [incorrectAnswerStyle, setIncorrectAnswerStyle] = useState(false);

  const primaryColor = theme.palette.mode === "dark" ? "#FFF" : "#000";

  const practiceBorder = {
    border: `3px solid ${primaryColor}`,
    borderRadius: "4px",
    boxShadow: correctAnswerStyle
    ? '1em 1em green'
    : incorrectAnswerStyle
    ? '1em 1em red'
    : 'none',
  };

  const bindingArray = props.isChecked
    ? vimPracticeBindings
    : vsPracticeBindings;

  const selectBinding = (arr) => {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    return bindingArray[randomIndex];
  };

  const [randomBinding, setRandomBinding] = useState(
    selectBinding(bindingArray)
  );

  const resetAnswerStyles = () => {
    setTimeout(() => {
      setCorrectAnswerStyle(false);
      setIncorrectAnswerStyle(false);
    }, 1000);
  };

  const handleCorrectKeyBinding = () => {
    setPoints((prev) => prev + 1);
    setRandomBinding(selectBinding(bindingArray));
    setCorrectAnswerStyle(true)
    resetAnswerStyles()
  };

  const handleIncorrectKeyBinding = () => {
    setIncorrectAnswerStyle(true); 
    resetAnswerStyles(); 
  };

  useEffect(() => {
    const listener = (event) => {
      if (areKeysCorrect(event, randomBinding.sequence)) {
        handleCorrectKeyBinding();
      } else {
        handleIncorrectKeyBinding()
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [points]);



  const areKeysCorrect = (e, sequence) => {
    let outcome = false;

    const keyTypeIsActive = (curr) => {
      return e[curr];
    };

    sequence.forEach((seq) => {
      if (seq.mainKeys.includes(e.key)) {
        outcome = seq.modifiers.every(keyTypeIsActive);
      }
    });
    return outcome;
  };

  return (
    <>
      <Box className="practice-item" sx={{ ...practiceBorder }}>
        <div className="points">Points: {points}</div>
        <div className="result">{randomBinding.result}</div>
      </Box>
    </>
  );
};

export default Practice;
