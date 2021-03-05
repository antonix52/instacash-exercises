"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = void 0;
var ItemGenerator_1 = require("./ItemGenerator");
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.updateQuality = function () {
        var itemGenerator = new ItemGenerator_1.ItemGenerator();
        for (var key in this.items) {
            var item = itemGenerator.generate(this.items[key]);
            item.updateQuality();
            this.items[key] = item;
        }
        return this.items;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
