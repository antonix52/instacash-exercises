import { Item } from "../Items/Item";

export abstract class Validator {
    checkQualityEmpty(item: Item) {
        return item.quality > 0
    }

    checkQualityLimited(item: Item) {
        return item.quality < 50
    }
}