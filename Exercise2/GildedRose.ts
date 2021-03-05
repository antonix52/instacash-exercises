import { Item } from "./Items/Item";
import { ItemGenerator } from "./ItemGenerator";

export class GildedRose
{
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items
    }

    updateQuality(): Array<Item>
    {
        var itemGenerator = new ItemGenerator()
        for (let key in this.items) {
            let item = itemGenerator.generate(this.items[key])
            item.updateQuality()
            this.items[key] = item
        }
        return this.items
    }
}