"use strict";
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('XX好');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('范XX', 18);
console.log(jiejie);
jiejie.say();
