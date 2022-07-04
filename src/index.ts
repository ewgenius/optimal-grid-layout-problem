export interface Grid {
  w: number;
  h: number;
}

export interface Element {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function calculatePosition(
  grid: Grid,
  elements: Array<Element>,
  newElement: Pick<Element, "w" | "h">
): Pick<Element, "x" | "y"> {
  const position = {
    x: 0,
    y: 0,
  };

  return position;
}
