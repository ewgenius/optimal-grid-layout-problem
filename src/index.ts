import { getElementId } from "./utils";

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
  newElementDimensions: Pick<Element, "w" | "h">
): Pick<Element, "x" | "y"> {
  // dictionary referencing all elements: x_y -> Element
  const dict = new Map<String, Element>();

  const matrix: Array<Array<string | null>> = new Array(grid.h)
    .fill(0)
    .map(() => new Array(grid.w).fill(null));

  // filling matrix with elements ids
  elements.forEach((e) => {
    const id = getElementId(e);
    dict.set(id, e);

    for (let i = 0; i < e.h; i++) {
      for (let j = 0; j < e.w; j++) {
        const y = e.y + i;
        const x = e.x + j;
        if (x >= 0 && x < grid.w && y >= 0 && y < grid.h) {
          matrix[y][x] = id;
        }
      }
    }
  });

  // check if given element doesn't intersect with anything, and fits grid dimensions (by width)
  function verify(e: Element) {
    for (let i = 0; i < e.h; i++) {
      for (let j = 0; j < e.w; j++) {
        const y = e.y + i;
        const x = e.x + j;
        if (y < grid.h && (x >= grid.w || matrix[y][x])) {
          return false;
        }
      }
    }
    return true;
  }

  let x = 0;
  let y = 0;
  while (true) {
    const step: Element = {
      ...newElementDimensions,
      x,
      y,
    };

    if (verify(step)) {
      // we found place, returning result
      break;
    }

    const id = matrix[y][x];

    // current cell is filled by some element, offset by its dimensions
    if (id) {
      const e = dict.get(id);
      x = e!.x + e!.w;
    } else {
      x += 1;
    }

    if (x + newElementDimensions.w > grid.w) {
      // element doesn't fit gird width, move to the next line
      x = 0;
      y += 1;

      if (y >= grid.h) {
        // y is already bigger then grid height, element will be added to the bottom
        break;
      }
    }
  }

  return {
    x,
    y,
  };
}
