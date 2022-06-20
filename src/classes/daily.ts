import { Ritos } from '../Interfaces/ritos.js'

export class Daily implements Ritos {
    name: string;
    time: number;
    constructor(n: string, t: number, readonly positive: string, private negative: string, public result: number) {
        this.name = n;
        this.time = t;
    }
    format() {
        return `The positive point is ${this.positive}, the negative point is ${this.negative}, and the result day is ${this.result}`;
    }

    addTime(t: number) {
        return this.time + t;
    }
}

