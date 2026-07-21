"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showTypes(v1 = "Nothing", v2 = "Nothing", v3 = "Nothing") {
    return `${v1} - ${v2} - ${v3}`;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
//# sourceMappingURL=2.js.map