import { Item } from "../Items/Item";

export abstract class SellInValidator
{
    checkMinSellIn(item: Item)
    {
        return item.sellIn > 0
    }

    checkSellInInLessThan(item: Item, value: number)
    {
        return item.sellIn < value
    }
}