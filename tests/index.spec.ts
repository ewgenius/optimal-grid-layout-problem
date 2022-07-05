import { calculatePosition } from "../src";
import { render } from "../src/utils";

describe("calculatePosition", () => {
  it("example 1", () => {
    const grid = { w: 16, h: 8 };
    const elements = [
      { x: 0, y: 0, w: 6, h: 3 },
      { x: 6, y: 0, w: 6, h: 6 },
    ];
    const newElement = { w: 4, h: 7 };

    const p = calculatePosition(grid, elements, newElement);
    render(grid, elements, {
      ...p,
      ...newElement,
    });

    expect(p).toEqual({ x: 12, y: 0 });
  });

  it("example 2", () => {
    const grid = { w: 16, h: 8 };
    const elements = [
      { x: 0, y: 0, w: 3, h: 7 },
      { x: 3, y: 0, w: 5, h: 2 },
      { x: 3, y: 2, w: 4, h: 2 },
      { x: 10, y: 0, w: 6, h: 6 },
    ];
    const newElement = { w: 4, h: 7 };

    const p = calculatePosition(grid, elements, newElement);
    render(grid, elements, {
      ...p,
      ...newElement,
    });

    expect(p).toEqual({ x: 3, y: 4 });
  });

  it("example 3", () => {
    const grid = { w: 10, h: 10 };
    const elements = [
      { x: 0, y: 0, w: 4, h: 3 },
      { x: 2, y: 3, w: 4, h: 2 },
      { x: 6, y: 0, w: 3, h: 8 },
      { x: 0, y: 8, w: 8, h: 2 },
      { x: 9, y: 0, w: 1, h: 10 },
      { x: 0, y: 9, w: 10, h: 1 },
    ];
    const newElement = { w: 6, h: 3 };

    const p = calculatePosition(grid, elements, newElement);
    render(grid, elements, {
      ...p,
      ...newElement,
    });
    expect(p).toEqual({
      x: 0,
      y: 5,
    });
  });

  it("example 4", () => {
    const grid = { w: 10, h: 10 };
    const elements = [
      { x: 0, y: 0, w: 4, h: 3 },
      { x: 2, y: 3, w: 4, h: 2 },
      { x: 6, y: 0, w: 3, h: 8 },
      { x: 0, y: 8, w: 8, h: 2 },
      { x: 9, y: 0, w: 1, h: 10 },
      { x: 0, y: 9, w: 10, h: 1 },
    ];
    const newElement = { w: 2, h: 2 };

    const p = calculatePosition(grid, elements, newElement);
    render(grid, elements, {
      ...p,
      ...newElement,
    });
    expect(p).toEqual({
      x: 4,
      y: 0,
    });
  });

  it("example 5", () => {
    const grid = { w: 16, h: 8 };
    const elements = [
      { x: 0, y: 0, w: 6, h: 3 },
      { x: 6, y: 0, w: 6, h: 6 },
    ];
    const newElement = { w: 16, h: 1 };

    const p = calculatePosition(grid, elements, newElement);
    render(grid, elements, {
      ...p,
      ...newElement,
    });

    expect(p).toEqual({ x: 0, y: 6 });
  });
});
