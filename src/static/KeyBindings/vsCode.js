export const vsCodeEditingBindings = [
  {
    keys: ["opt", "up/down"],
    sequence: [
      {
        mainKeys: ["ArrowUp", "ArrowDown"],
        modifiers: ["altKey"],
      },
    ],
    result: "move line up/down",
    id: 1,
  },

  {
    keys: ["opt", "shift", "up/down"],
    sequence: [
      {
        mainKeys: ["ArrowUp", "ArrowDown"],
        modifiers: ["altKey", "shiftKey"],
      },
    ],
    result: "copy line up/down",
    id: 2,
  },
  {
    keys: ["cmd", "shift", "left/right"],
    sequence: [
      {
        mainKeys: ["ArrowLeft", "ArrowRight"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "select line",
    id: 3,
  },
  {
    keys: ["cmd", "shift", "enter"],
    sequence: [
      {
        mainKeys: ["Enter"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "insert line above",
    id: 4,
  },
  {
    keys: ["cmd", "enter"],
    sequence: [
      {
        mainKeys: ["Enter"],
        modifiers: ["metaKey"],
      },
    ],
    result: "insert line below",
    id: 5,
  },
  {
    keys: ["shift", "up/down"],
    sequence: [
      {
        mainKeys: ["ArrowUp", "ArrowDown"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "select line above/below",
    id: 6,
  },
  {
    keys: ["cmd", "shift", "K"],
    sequence: [
      {
        mainKeys: ["k"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "delete line",
    id: 7,
  },
];

export const vsCodeCursorBindings = [
  {
    keys: ["opt", "right/left"],
    sequence: [
      {
        mainKeys: ["ArrowRight", "ArrowLeft"],
        modifiers: ["altKey"],
      },
    ],
    result: "move cursor over by word",
    id: 1,
  },
  {
    keys: ["opt", "shift", "right/left"],
    sequence: [
      {
        mainKeys: ["ArrowRight", "ArrowLeft"],
        modifiers: ["altKey", "shiftKey"],
      },
    ],
    result: "select by word",
    id: 2,
  },
];

export const vsCodeMultiBindings = [
  {
    keys: ["opt", "cmd", "up/down"],
    sequence: [
      {
        mainKeys: ["ArrowUp", "ArrowDown"],
        modifiers: ["altKey", "metaKey"],
      },
    ],
    result: "insert cursor up/down",
    id: 2,
  },
  {
    keys: ["cmd", "shift", "L"],
    sequence: [
      {
        mainKeys: ["l"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "select all occurances of string",
    id: 3,
  },
  {
    keys: ["cmd", "d"],
    sequence: [
      {
        mainKeys: ["d"],
        modifiers: ["metaKey"],
      },
    ],
    result: "select next occurance of string",
    id: 4,
  },
  {
    keys: ["esc"],
    sequence: [
      {
        mainKeys: ["Escape"],
        modifiers: [],
      },
    ],
    result: "back to one cursor",
    id: 5,
  },
];

export const vsCodeNavBindings = [
  {
    keys: ["ctrl", "g"],
    sequence: [
      {
        mainKeys: ["g"],
        modifiers: ["ctrlKey"],
      },
    ],
    result: "go to line",
    id: 1,
  },
  {
    keys: ["cmd", "shift", "\\"],
    sequence: [
      {
        mainKeys: ["\\"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "jump to matching bracket",
    id: 2,
  },
  {
    keys: ["cmd", "shift", "O"],
    sequence: [
      {
        mainKeys: ["o"],
        modifiers: ["metaKey", "shiftKey"],
      },
    ],
    result: "go to symbol",
    id: 3,
  },
  {
    keys: ["ctrl", "-"],
    sequence: [
      {
        mainKeys: ["-"],
        modifiers: ["ctrlKey"],
      },
    ],
    result: "go to prev cursor/page",
    id: 4,
  },
  {
    keys: ["ctrl", "shift", "-"],
    sequence: [
      {
        mainKeys: ["_"],
        modifiers: ["ctrlKey", "shiftKey"],
      },
    ],
    result: "go to current cursor/page",
    id: 5,
  },
  {
    keys: ["cmd", "n"],
    sequence: [
      {
        mainKeys: ["n"],
        modifiers: ["metaKey"],
      },
    ],
    result: "new file",
    id: 6,
  },
];