import { useEffect, useState } from "react";
import { vimMotionBindings } from "../static/KeyBindings/vim";
import { vimInsertBindings } from "../static/KeyBindings/vim";
import { vimNormalBindings } from "../static/KeyBindings/vim";
import { vimVisualBindings } from "../static/KeyBindings/vim";

import { vsCodeEditingBindings } from "../static/KeyBindings/vsCode";
import { vsCodeCursorBindings } from "../static/KeyBindings/vsCode";
import { vsCodeMultiBindings } from "../static/KeyBindings/vsCode";
import { vsCodeNavBindings } from "../static/KeyBindings/vsCode";

const Practice = (props) => {
  const bindingArray = props.isChecked
    ? [
        ...vimMotionBindings,
        ...vimInsertBindings,
        ...vimNormalBindings,
        ...vimVisualBindings,
      ]
    : [
        ...vsCodeEditingBindings,
        ...vsCodeCursorBindings,
        ...vsCodeMultiBindings,
        ...vsCodeNavBindings,
      ].filter(
        (b) =>
          b.result !== "go to current cursor/page" ||
          b.result !== "go to prev cursor/page"
      );

  const selectBinding = (arr) => {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    return bindingArray[randomIndex];
  };

  const [randomBinding, setRandomBinding] = useState(
    selectBinding(bindingArray)
  );
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const listener = (event) => {
      console.log(
        "keys response",
        areKeysCorrect(event, randomBinding.sequence)
      );
      if (areKeysCorrect(event, randomBinding.sequence)) {
        handleCorrectKeyBinding();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [points]);

  const handleCorrectKeyBinding = () => {
    setPoints((prev) => prev + 1);
    setRandomBinding(selectBinding(bindingArray));
  };

  const areKeysCorrect = (e, sequence) => {
    let outcome = false;

    const keyTypeIsActive = (curr) => {
      console.log(e[curr]);
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
      <div className="practice-item">{randomBinding.result}</div>
      <div className="points">Points: {points}</div>
    </>
  );
};

export default Practice;
