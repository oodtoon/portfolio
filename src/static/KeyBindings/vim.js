export const vimMotionBindings = [
  {
    keys: ["k"],
    sequence: [
      {
        mainKeys: ["k"],
        modifiers: [],
      },
    ],
    result: "up",
    id: 1,
  },
  {
    keys: ["j"],
    sequence: [
      {
        mainKeys: ["j"],
        modifiers: [],
      },
    ],
    result: "down",
    id: 2,
  },
  {
    keys: ["h"],
    sequence: [
      {
        mainKeys: ["h"],
        modifiers: [],
      },
    ],
    result: "left",
    id: 3,
  },
  {
    keys: ["l"],
    sequence: [
      {
        mainKeys: ["l"],
        modifiers: [],
      },
    ],
    result: "right",
    id: 4,
  },
  {
    keys: ["w"],
    sequence: [
      {
        mainKeys: ["w"],
        modifiers: [],
      },
    ],
    result: "jump forward by word",
    id: 11,
  },
  {
    keys: ["b"],
    sequence: [
      {
        mainKeys: ["b"],
        modifiers: [],
      },
    ],
    result: "jump back by word",
    id: 12,
  },
  {
    keys: ["e"],
    sequence: [
      {
        mainKeys: ["e"],
        modifiers: [],
      },
    ],
    result: "jump forward by end of word",
    id: 13,
  },
  {
    keys: ["$"],
    sequence: [
      {
        mainKeys: ["$"],
        modifiers: [],
      },
    ],
    result: "jump to line end",
    id: 14,
  },
  {
    keys: ["%"],
    sequence: [
      {
        mainKeys: ["%"],
        modifiers: [],
      },
    ],
    result: "jump to matching block char",
    id: 15,
  },
  {
    keys: ["g", "g"],
    sequence: [
      {
        mainKeys: ["g"],
        modifiers: [],
      },
      {
        mainKeys: ["g"],
        modifiers: [],
      },
    ],
    result: "jump to first line",
    id: 16,
  },
  {
    keys: ["G"],
    sequence: [
      {
        mainKeys: ["g"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "jump to last line",
    id: 17,
  },
  {
    keys: ["v", "i", '"', "/", "("],
    sequence: [
      {
        mainKeys: ["v"],
        modifiers: [],
      },
      {
        mainKeys: ["i"],
        modifiers: [],
      },
      {
        mainKeys: ['"'],
        modifiers: [],
      },
      {
        mainKeys: ["/"],
        modifiers: [],
      },
      {
        mainKeys: ["("],
        modifiers: [],
      },
    ],
    result: "jump inside parantheses",
    id: 21,
  },
];

export const vimNormalBindings = [
  {
    keys: ["u"],
    sequence: [
      {
        mainKeys: ["u"],
        modifiers: [],
      },
    ],
    result: "undo",
    id: 1,
  },
  {
    keys: ["ctrl", "r"],
    sequence: [
      {
        mainKeys: ["r"],
        modifiers: ["ctrlKey"],
      },
    ],
    result: "redo",
    id: 45,
  },
  {
    keys: ["r"],
    sequence: [
      {
        mainKeys: ["r"],
        modifiers: [],
      },
    ],
    result: "replace at cursor",
    id: 2,
  },
  {
    keys: ["p"],
    sequence: [
      {
        mainKeys: ["p"],
        modifiers: [],
      },
    ],
    result: "put AKA paste",
    id: 3,
  },
  {
    keys: ["shift", "P"],
    sequence: [
      {
        mainKeys: ["p"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "put before cursor",
    id: 4,
  },
  {
    keys: ["f"],
    sequence: [
      {
        mainKeys: ["f"],
        modifiers: [],
      },
    ],
    result: "find character after cursor",
    id: 5,
  },
  {
    keys: ["shift", "F"],
    sequence: [
      {
        mainKeys: ["f"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "find character before cursor",
    id: 6,
  },
  {
    keys: ["y", "y"],
    sequence: [
      {
        mainKeys: ["y"],
        modifiers: [],
      },
      {
        mainKeys: ["y"],
        modifiers: [],
      },
    ],
    result: "yank AKA copy",
    id: 7,
  },
  {
    keys: ['"', "y"],
    sequence: [
      {
        mainKeys: ['"'],
        modifiers: [],
      },
      {
        mainKeys: ["y"],
        modifiers: [],
      },
    ],
    result: "copy to system clipboard",
    id: 20,
  },
  {
    keys: ["d", "d"],
    sequence: [
      {
        mainKeys: ["d"],
        modifiers: [],
      },
      {
        mainKeys: ["d"],
        modifiers: [],
      },
    ],
    result: "delete line",
    id: 21,
  },
];

export const vimInsertBindings = [
  {
    keys: ["i"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: [],
      },
    ],
    result: "insert before cursor",
    id: 1,
  },
  {
    keys: ["shift", "I"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "insert at line beginning",
    id: 2,
  },
  {
    keys: ["a"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: [],
      },
    ],
    result: "insert after cursor",
    id: 3,
  },
  {
    keys: ["shift", "A"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "insert at end of line",
    id: 4,
  },

  {
    keys: ["o"],
    sequence: [
      {
        mainKeys: ["o"],
        modifiers: [],
      },
    ],
    result: "insert line below",
    id: 5,
  },
  {
    keys: ["shift", "O"],
    sequence: [
      {
        mainKeys: ["o"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "insert line above",
    id: 6,
  },
];

export const vimVisualBindings = [
  {
    keys: ["v"],
    sequence: [
      {
        mainKeys: ["v"],
        modifiers: [],
      },
    ],
    result: "start visual mode, mark lines, then do command",
    id: 1,
  },
  {
    keys: ["shift", "V"],
    sequence: [
      {
        mainKeys: ["v"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "start visual mode",
    id: 2,
  },
  {
    keys: ["ctrl", "v"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: ["ctrlKey"],
      },
    ],
    result: "start visual block mode",
    id: 3,
  },
  {
    keys: ["a", "b"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: [],
      },
      {
        mainKeys: ["b"],
        modifiers: [],
      },
    ],
    result: "mark a word",
    id: 4,
  },

  {
    keys: [">"],
    sequence: [
      {
        mainKeys: [">"],
        modifiers: [],
      },
    ],
    result: "shift text right",
    id: 5,
  },
  {
    keys: ["<"],
    sequence: [
      {
        mainKeys: ["<"],
        modifiers: [],
      },
    ],
    result: "shift text left",
    id: 6,
  },
  {
    keys: ["a", "b"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: [],
      },
      {
        mainKeys: ["b"],
        modifiers: [],
      },
    ],
    result: "a block with ()",
    id: 7,
  },
  {
    keys: ["a", "shift", "B"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: [],
      },
      {
        mainKeys: ["b"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "a block with {}",
    id: 8,
  },
  {
    keys: ["a", "t"],
    sequence: [
      {
        mainKeys: ["a"],
        modifiers: [],
      },
      {
        mainKeys: ["t"],
        modifiers: [],
      },
    ],
    result: "a block with <>",
    id: 9,
  },
  {
    keys: ["i", "b"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: [],
      },
      {
        mainKeys: ["b"],
        modifiers: [],
      },
    ],
    result: "inner block with ()",
    id: 10,
  },
  {
    keys: ["i", "shift", "B"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: [],
      },
      {
        mainKeys: ["b"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "inner block with {}",
    id: 11,
  },
  {
    keys: ["i", "shift", "T"],
    sequence: [
      {
        mainKeys: ["i"],
        modifiers: [],
      },
      {
        mainKeys: ["t"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "inner block with <>",
    id: 12,
  },
  {
    keys: ["u"],
    sequence: [
      {
        mainKeys: ["u"],
        modifiers: [],
      },
    ],
    result: "switch to lowercase",
    id: 13,
  },
  {
    keys: ["shift", "U"],
    sequence: [
      {
        mainKeys: ["u"],
        modifiers: ["shiftKey"],
      },
    ],
    result: "switch to uppercase",
    id: 14,
  },
  {
    keys: ["esc"],
    sequence: [
      {
        mainKeys: ["Escape"],
        modifiers: [],
      },
    ],
    result: "exit visual mode",
    id: 90,
  },
];
