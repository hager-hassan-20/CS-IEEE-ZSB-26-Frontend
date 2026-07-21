"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Info {
    theName;
    theAge;
    constructor(theName, theAge) {
        this.theName = theName;
        this.theAge = theAge;
    }
}
class Full extends Info {
    country;
    constructor(theName, theAge, country) {
        super(theName, theAge);
        this.country = country;
    }
}
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
//# sourceMappingURL=3.js.map