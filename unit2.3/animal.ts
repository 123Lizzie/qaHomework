export class Animal {
    name: string;
    type: string;
    preferredFoods: Array<string>;
    constructor(name: string, type: string, preferredFoods: Array<string>) {
        this.name = name;
        this.type = type;
        this.preferredFoods = preferredFoods;
    }
    feed(food: string) {
        if (this.preferredFoods.includes (food))
        return `${this.name} the ${this.type} likes ${food}!`;
        else return `${this.name} the ${this.type} does not like ${food}!`

    }
}