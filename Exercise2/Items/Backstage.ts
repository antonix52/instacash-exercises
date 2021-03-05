import { Item } from "./Item";
import { Validator } from "../Shared/Validator";
import { SellInValidator } from "../Shared/SellInValidator";

export class BackStage extends Item implements Quality
{
    readonly SELL_IN_VALUES = {
        'MAX_VALUES_1': 11,
        'MAX_VALUES_2': 6
    }

    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void
    {
        if (!this.checkMinSellIn(this)) {
            this.quality = 0
        } else {
            if (this.checkQualityLimited(this)) this.quality++
            
            if (this.checkQualityLimited(this) && this.checkSellInInLessThan(this, this.SELL_IN_VALUES['MAX_VALUES_1'])) {
                this.quality++
            }

            if (this.checkQualityLimited(this) && this.checkSellInInLessThan(this, this.SELL_IN_VALUES['MAX_VALUES_2'])) {
                this.quality++
            }

            this.sellIn--
        }
    }
}

export interface BackStage extends Validator, SellInValidator {}