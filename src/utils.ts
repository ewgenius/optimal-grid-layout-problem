import { Grid, Element } from "./index";

const squares = [
  "\u25A3",
  "\u25A4",
  "\u25A5",
  "\u25A6",
  "\u25A7",
  "\u25A8",
  "\u25A9",
];

export function getElementId(e: Element): string {
  return `${e.x}_${e.y}`;
}

export function render(
  grid: Grid,
  elements: Array<Element & { char?: string }>,
  newElement?: Element
) {
  const m: Array<Array<string>> = new Array(grid.h)
    .fill(0)
    .map(() => new Array(grid.w).fill(" "));

  (newElement
    ? [
        ...elements,
        {
          ...newElement,
          char: "\u25A2",
        },
      ]
    : elements
  ).forEach((e, n) => {
    for (let i = 0; i < e.h; i++) {
      for (let j = 0; j < e.w; j++) {
        const y = e.y + i;
        const x = e.x + j;
        if (y >= m.length) {
          for (let k = 0; k < y - m.length + 1; k++) {
            m.push(new Array(grid.w).fill(" "));
          }
        }
        if (x < grid.w) {
          m[y][x] = e.char || squares[n % squares.length] || "  ";
        }
      }
    }
  });

  console.log(`Grid: ${JSON.stringify(grid)}
Elements: ${JSON.stringify(elements)}
New Element: ${JSON.stringify(newElement)}

${m
  .map((row, i) => {
    return "| " + row.map((_, j) => m[i][j]).join(" ") + " |";
  })
  .join("\n")}
`);
}
