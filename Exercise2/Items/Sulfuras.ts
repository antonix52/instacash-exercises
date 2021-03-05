import { Item } from "./Item";

export class Sulfuras extends Item implements Quality
{
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

    updateQuality(): void {}
}