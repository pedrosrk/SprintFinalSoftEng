export class Retrospective {
    constructor(n, t, positive, negative, result) {
        this.positive = positive;
        this.negative = negative;
        this.result = result;
        this.name = n;
        this.time = t;
    }
    format() {
        return `The strenth is ${this.positive}, the improvement is ${this.negative}, and the result sprint is ${this.result}`;
    }
}
