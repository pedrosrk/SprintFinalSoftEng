export class Daily {
    constructor(n, t, positive, negative, result) {
        this.positive = positive;
        this.negative = negative;
        this.result = result;
        this.name = n;
        this.time = t;
    }
    format() {
        return `The positive point is ${this.positive}, the negative point is ${this.negative}, and the result day is ${this.result}`;
    }
    addTime(t) {
        return this.time + t;
    }
}
