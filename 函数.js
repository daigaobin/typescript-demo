"use strict";
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
console.log(sum);
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
function buildNameDefaultValue(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
function buildNamePs(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildNamePs("Joseph", "Samuel", "Lucas", "MacKinzie");
