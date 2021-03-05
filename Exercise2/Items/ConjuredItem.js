"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConjuredItem = void 0;
var Item_1 = require("./Item");
var ConjuredItem = /** @class */ (function (_super) {
    __extends(ConjuredItem, _super);
    function ConjuredItem(name, sellIn, quality) {
        var _this = _super.call(this, name, sellIn, quality) || this;
        _this.MIN_QUALITY_VALUE = 2;
        return _this;
    }
    ConjuredItem.prototype.updateQuality = function () {
        !(this.checkQualityValue()) ? null : this.quality -= 2;
        if (this.checkQualityValue() && !this.checkMinSellIn(this)) {
            this.quality -= 2;
        }
        this.sellIn--;
    };
    ConjuredItem.prototype.checkQualityValue = function () {
        return this.quality >= this.MIN_QUALITY_VALUE;
    };
    return ConjuredItem;
}(Item_1.Item));
exports.ConjuredItem = ConjuredItem;
