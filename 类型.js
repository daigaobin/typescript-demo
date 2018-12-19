"use strict";
/**
 * Created by daigb on 2018/10/15.
 */
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
var decLiteral = 6;
var isDone = false;
var list = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(sayHello(user));
