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
exports.DefaultItem = void 0;
var Item_1 = require("./Item");
var DefaultItem = /** @class */ (function (_super) {
    __extends(DefaultItem, _super);
    function DefaultItem(name, sellIn, quality) {
        return _super.call(this, name, sellIn, quality) || this;
    }
    DefaultItem.prototype.updateQuality = function () {
        !(this.checkQualityEmpty(this)) ? null : this.quality--;
        if (this.checkQualityEmpty(this) && !this.checkMinSellIn(this)) {
            this.quality--;
        }
        this.sellIn--;
    };
    return DefaultItem;
}(Item_1.Item));
exports.DefaultItem = DefaultItem;
