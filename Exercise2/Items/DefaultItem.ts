import { Item } from "./Item";
import { SellInValidator } from "../Shared/SellInValidator";
import { Validator } from "../Shared/Validator";

export class DefaultItem extends Item implements Quality
{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }
    
    updateQuality(): void
    {
        !(this.checkQualityEmpty(this)) ? null : this.quality--
        if (this.checkQualityEmpty(this) && !this.checkMinSellIn(this)) {
            this.quality--
        }
        this.sellIn--
    }
}

export interface DefaultItem extends Validator, SellInValidator {}