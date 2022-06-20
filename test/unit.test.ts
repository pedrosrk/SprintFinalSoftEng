export interface Ritos {
  name: string;
  time: number;
  format(): string;
}

export class Daily implements Ritos {
  name: string;
  time: number;
  constructor(n: string, t: number,
    readonly positive: string,
    private negative: string,
    public result: number) {
    this.name = n;
    this.time = t;
  }
  format() {
    return `The positive point is ${this.positive}, the point negative is ${this.negative}, and the day result is ${this.result}`;
  }
  addTime(t: number) {
    return this.time + t;
  }
}

export function add(x: number, y: number): number {
  return x + y;
}

// describe("test add function", () => {
//   it("should return 15 for add(10,5)", () => {
//     expect(add(10, 5)).toBe(15);
//   });
//   it("should return 5 for add(2,3)", () => {
//     expect(add(2, 3)).toBe(5);
//   });
// });

// let doc = new Daily('day01', 15, 'positive.value', 'negative.value', 100);

// describe("test add time in daily", () => {
//     it("should return 25 for doc.addTime(10);", () => {
//       expect(25).toBe(doc.addTime(10));
//     });
// });