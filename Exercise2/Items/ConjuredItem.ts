import { Item } from "./Item";
import { SellInValidator } from "../Shared/SellInValidator";
import { Validator } from "../Shared/Validator";

export class ConjuredItem extends Item implements Quality
{
    readonly MIN_QUALITY_VALUE = 2
    
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }
    
    updateQuality(): void
    {
        !(this.checkQualityValue()) ? null : this.quality -= 2
        if (this.checkQualityValue() && !this.checkMinSellIn(this)) {
            this.quality -= 2
        }
        this.sellIn--   
    }

    private checkQualityValue(): boolean
    {
        return this.quality >= this.MIN_QUALITY_VALUE
    }
}

export interface ConjuredItem extends Validator, SellInValidator {}