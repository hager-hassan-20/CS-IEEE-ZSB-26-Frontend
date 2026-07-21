"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(discount) {
        console.log(`The Discount Is ${discount}`);
    }
}
// Do Not Edit Here
let gameOne = new Game("Ys", 100);
let gameTwo = new Game(2064, 100); // There's A Game Called "2064"
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
//# sourceMappingURL=3.js.map