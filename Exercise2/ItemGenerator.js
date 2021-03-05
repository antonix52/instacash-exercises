"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemGenerator = void 0;
var Sulfuras_1 = require("./Items/Sulfuras");
var Backstage_1 = require("./Items/Backstage");
var ConjuredItem_1 = require("./Items/ConjuredItem");
var AgedBrie_1 = require("./Items/AgedBrie");
var DefaultItem_1 = require("./Items/DefaultItem");
var SellInValidator_1 = require("./Shared/SellInValidator");
var Validator_1 = require("./Shared/Validator");
var ItemGenerator = /** @class */ (function () {
    function ItemGenerator() {
        this.NAMES = {
            'SULF': 'Sulfuras',
            'BACK': 'Backstage',
            'CONJ': 'Conjured',
            'BRIE': 'Brie'
        };
    }
    ItemGenerator.prototype.generate = function (item) {
        var name = item.name;
        if (name.includes(this.NAMES['SULF'])) {
            this.applyMixins(Sulfuras_1.Sulfuras, [Validator_1.Validator, SellInValidator_1.SellInValidator]);
            return new Sulfuras_1.Sulfuras(item.name, item.sellIn, item.quality);
        }
        if (name.includes(this.NAMES['BACK'])) {
            this.applyMixins(Backstage_1.BackStage, [Validator_1.Validator, SellInValidator_1.SellInValidator]);
            return new Backstage_1.BackStage(item.name, item.sellIn, item.quality);
        }
        if (name.includes(this.NAMES['CONJ'])) {
            this.applyMixins(ConjuredItem_1.ConjuredItem, [Validator_1.Validator, SellInValidator_1.SellInValidator]);
            return new ConjuredItem_1.ConjuredItem(item.name, item.sellIn, item.quality);
        }
        if (name.includes(this.NAMES['BRIE'])) {
            this.applyMixins(AgedBrie_1.AgedBrie, [Validator_1.Validator, SellInValidator_1.SellInValidator]);
            return new AgedBrie_1.AgedBrie(item.name, item.sellIn, item.quality);
        }
        this.applyMixins(DefaultItem_1.DefaultItem, [Validator_1.Validator, SellInValidator_1.SellInValidator]);
        return new DefaultItem_1.DefaultItem(item.name, item.sellIn, item.quality);
    };
    ItemGenerator.prototype.applyMixins = function (derivedCtor, constructors) {
        constructors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                    Object.create(null));
            });
        });
    };
    return ItemGenerator;
}());
exports.ItemGenerator = ItemGenerator;
