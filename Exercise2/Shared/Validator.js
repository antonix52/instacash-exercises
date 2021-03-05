"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.checkQualityEmpty = function (item) {
        return item.quality > 0;
    };
    Validator.prototype.checkQualityLimited = function (item) {
        return item.quality < 50;
    };
    return Validator;
}());
exports.Validator = Validator;
