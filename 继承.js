"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'web');
jspangObj.interest();
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    JsShuai.prototype.zhuangQian = function () {
        console.log('一天赚了一个亿');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai("技术帅", 5, '演讲');
shuai.interest();
shuai.zhuangQian();
