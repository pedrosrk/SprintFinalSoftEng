import { Ritos } from '../Interfaces/ritos.js'

export class Retrospective implements Ritos {
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
    return `The strenth is ${this.positive}, the improvement is ${this.negative}, and the result sprint is ${this.result}`;
  }
}