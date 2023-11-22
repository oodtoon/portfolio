import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useState } from "react";
import CustomSwitch from "../CustomSwitch";
import Practice from "../Practice";
import PracticeBtn from "../PracticeBtn";
import { vsCodeCursorBindings } from "../../static/KeyBindings/vsCode";
import { vsCodeEditingBindings } from "../../static/KeyBindings/vsCode";
import { vsCodeMultiBindings } from "../../static/KeyBindings/vsCode";
import { vsCodeNavBindings } from "../../static/KeyBindings/vsCode";

import { vimMotionBindings } from "../../static/KeyBindings/vim";
import { vimNormalBindings } from "../../static/KeyBindings/vim";
import { vimInsertBindings } from "../../static/KeyBindings/vim";
import { vimVisualBindings } from "../../static/KeyBindings/vim";
import { useTheme } from "@emotion/react";

const KeyItem = (props) => {
  const theme = useTheme();

  const borderWidth = {
    display: "inline",
    "&::before": {
      borderWidth: theme.palette.mode === "dark" ? "1px" : "2px",
    },
    "&::after": {
      borderWidth: theme.palette.mode === "dark" ? "1px" : "2px",
    },
  };

  return (
    <div className="binding-line">
      <span>
        {" "}
        {props.keys.map((char, i) => (
          <Box className="binding-key" sx={{ ...borderWidth }} key={i}>
            {char}
          </Box>
        ))}
      </span>

      <span className="binding-result">{props.result}</span>
    </div>
  );
};

const PracticeType = (props) => {
  const type = props.isChecked ? "VIM" : "VS Code on Mac OS";

  return (
    <>
      <span className="binding-type">{type} Practice</span>
    </>
  );
};

const KeyBindings = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isPractice, setIsPreactice] = useState(false);

  const toggleBindingType = () => {
    setIsChecked((prev) => !prev);
  };

  const togglePractice = () => {
    setIsPreactice((prev) => !prev);
  };

  return (
    <>
      <Box className="binding-container">
        <h1 className="binding-title">Helpful Key Bindings</h1>
        <Box className="binding-filter-container">
          {!isPractice && (
            <>
              <span className="binding-type">VS Code on Mac OS</span>
              <CustomSwitch onClick={toggleBindingType} checked={isChecked} />
              <span className="binding-type">VIM</span>
            </>
          )}
          {isPractice && <PracticeType isChecked={isChecked} />}
          <PracticeBtn toggle={togglePractice} isPractice={isPractice} />
        </Box>

        {!isPractice && (
          <>
            {!isChecked && (
              <Box className="bindings">
                <Box className="binding-section-container">
                  <h2>Editing</h2>
                  {vsCodeEditingBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>

                <Box className="binding-section-container">
                  <h2>Cursor</h2>
                  {vsCodeCursorBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                  <h3>Multi Cursor</h3>
                  {vsCodeMultiBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
                <Box className="binding-section-container">
                  <h2>Navigation</h2>
                  {vsCodeNavBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
              </Box>
            )}
            {isChecked && (
              <Box className="bindings">
                <Box className="binding-section-container">
                  <h2>Motions</h2>
                  {vimMotionBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
                <Box className="binding-section-container">
                  <h2>Normal Mode</h2>
                  {vimNormalBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
                <Box className="binding-section-container">
                  <h2>Insert Mode</h2>
                  {vimInsertBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
                <Box className="binding-section-container">
                  <h2>Visual Mode</h2>
                  {vimVisualBindings.map((binding) => (
                    <KeyItem
                      result={binding.result}
                      keys={binding.keys}
                      key={binding.id}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </>
        )}
        {!isChecked && !isPractice && (
          <Box className="binding-section-container">
            <h2>All VS Code Bindings</h2>
            <Link
              color="a.main"
              href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf"
              target="_blank"
            >
              access document here
            </Link>
          </Box>
        )}

        {isChecked && !isPractice && (
          <Box className="binding-section-conatiner">
            <h2>All VIM Bindings</h2>
            <Link
              color="a.main"
              href="https://www.cs.cmu.edu/~15131/f17/topics/vim/vim-cheatsheet.pdf"
              target="_blank"
            >
              access document here
            </Link>
          </Box>
        )}
        {isPractice && (
          <>
            <Box className="practice-container">
              <div className="practice-item-title">
                <h2>Enter Key Binding Combo To Complete The Request</h2>
                <div>Practice may not work on PC or mobile</div>
              </div>

              <Practice isChecked={isChecked} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default KeyBindings;
