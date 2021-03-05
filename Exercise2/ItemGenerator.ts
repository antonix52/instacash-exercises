import { Item } from "./Items/Item";
import { Sulfuras } from "./Items/Sulfuras";
import { BackStage } from "./Items/Backstage";
import { ConjuredItem } from "./Items/ConjuredItem";
import { AgedBrie } from "./Items/AgedBrie";
import { DefaultItem } from "./Items/DefaultItem";
import { SellInValidator } from "./Shared/SellInValidator";
import { Validator } from "./Shared/Validator";

export class ItemGenerator {

    readonly NAMES = {
        'SULF': 'Sulfuras',
        'BACK': 'Backstage',
        'CONJ': 'Conjured',
        'BRIE': 'Brie'
    }

    generate(item: Item): any
    {
        let name = item.name

        if (name.includes(this.NAMES['SULF'])) {
            this.applyMixins(Sulfuras, [Validator, SellInValidator])
            return new Sulfuras(item.name, item.sellIn, item.quality)
        }

        if (name.includes(this.NAMES['BACK'])) {
            this.applyMixins(BackStage, [Validator, SellInValidator])
            return new BackStage(item.name, item.sellIn, item.quality)
        }

        if (name.includes(this.NAMES['CONJ'])) {
            this.applyMixins(ConjuredItem, [Validator, SellInValidator])
            return new ConjuredItem(item.name, item.sellIn, item.quality)
        }

        if (name.includes(this.NAMES['BRIE'])) {
            this.applyMixins(AgedBrie, [Validator, SellInValidator])
            return new AgedBrie(item.name, item.sellIn, item.quality)
        }

        this.applyMixins(DefaultItem, [Validator, SellInValidator])
        return new DefaultItem(item.name, item.sellIn, item.quality)
    }

    private applyMixins(derivedCtor: any, constructors: any[]) {
        constructors.forEach((baseCtor) => {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
              derivedCtor.prototype,
              name,
              Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
          });
        });
    }
}