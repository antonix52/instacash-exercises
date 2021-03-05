import { Item } from "./Item";
import {SellInValidator} from "../Shared/SellInValidator";
import { Validator } from "../Shared/Validator";

export class AgedBrie extends Item implements Quality 
{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void
    {
        if (this.checkMinSellIn(this)) {
            !(this.checkQualityLimited(this)) ? null : this.quality++
            this.sellIn--
        }
    }
}

export interface AgedBrie extends Validator, SellInValidator {}