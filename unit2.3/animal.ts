export class Animal {
    //This shows what each animal can contain: the name, type, and preferred food(s).
    name: string;
    type: string;
    preferredFoods: Array<string>;
    constructor(name: string, type: string, preferredFoods: Array<string>) {
        this.name = name;
        this.type = type;
        this.preferredFoods = preferredFoods;
    }
    //This ensures that each animal likes the food(s) listed as their preferredFoods and does not like anything outside of that.
    feed(food: string) {
        if (this.preferredFoods.includes (food))
        return `${this.name} the ${this.type} likes ${food}!`;
        else return `${this.name} the ${this.type} does not like ${food}!`

    }
}