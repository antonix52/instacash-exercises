"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellInValidator = void 0;
var SellInValidator = /** @class */ (function () {
    function SellInValidator() {
    }
    SellInValidator.prototype.checkMinSellIn = function (item) {
        return item.sellIn > 0;
    };
    SellInValidator.prototype.checkSellInInLessThan = function (item, value) {
        return item.sellIn < value;
    };
    return SellInValidator;
}());
exports.SellInValidator = SellInValidator;
