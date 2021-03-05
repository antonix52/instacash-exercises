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
exports.BackStage = void 0;
var Item_1 = require("./Item");
var BackStage = /** @class */ (function (_super) {
    __extends(BackStage, _super);
    function BackStage(name, sellIn, quality) {
        var _this = _super.call(this, name, sellIn, quality) || this;
        _this.SELL_IN_VALUES = {
            'MAX_VALUES_1': 11,
            'MAX_VALUES_2': 6
        };
        return _this;
    }
    BackStage.prototype.updateQuality = function () {
        if (!this.checkMinSellIn(this)) {
            this.quality = 0;
        }
        else {
            if (this.checkQualityLimited(this))
                this.quality++;
            if (this.checkQualityLimited(this) && this.checkSellInInLessThan(this, this.SELL_IN_VALUES['MAX_VALUES_1'])) {
                this.quality++;
            }
            if (this.checkQualityLimited(this) && this.checkSellInInLessThan(this, this.SELL_IN_VALUES['MAX_VALUES_2'])) {
                this.quality++;
            }
            this.sellIn--;
        }
    };
    return BackStage;
}(Item_1.Item));
exports.BackStage = BackStage;
