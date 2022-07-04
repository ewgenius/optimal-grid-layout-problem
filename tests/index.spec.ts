import { calculatePosition } from "../src";

describe("calculatePosition", () => {
  it("example 1", () => {
    const p = calculatePosition(
      { w: 16, h: 8 },
      [
        { x: 0, y: 0, w: 6, h: 3 },
        { x: 6, y: 0, w: 6, h: 6 },
      ],
      {
        w: 4,
        h: 7,
      }
    );

    expect(p).toEqual({ x: 12, y: 0 });
  });

  it("example 2", () => {
    const p = calculatePosition(
      { w: 16, h: 8 },
      [
        { x: 0, y: 0, w: 3, h: 7 },
        { x: 3, y: 0, w: 5, h: 2 },
        { x: 3, y: 2, w: 4, h: 2 },
        { x: 10, y: 0, w: 6, h: 6 },
      ],
      { w: 4, h: 7 }
    );

    expect(p).toEqual({ x: 3, y: 4 });
  });
});
