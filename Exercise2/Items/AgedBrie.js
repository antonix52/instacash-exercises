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
exports.AgedBrie = void 0;
var Item_1 = require("./Item");
var AgedBrie = /** @class */ (function (_super) {
    __extends(AgedBrie, _super);
    function AgedBrie(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    AgedBrie.prototype.updateQuality = function () {
        if (this.checkMinSellIn(this)) {
            !(this.checkQualityLimited(this)) ? null : this.quality++;
            this.sellIn--;
        }
    };
    return AgedBrie;
}(Item_1.Item));
exports.AgedBrie = AgedBrie;
