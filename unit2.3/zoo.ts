import { Animal } from "./animal";
let animals: Array<Animal> = [
    new Animal("Alex", "Lion", ["meat"]),
    new Animal("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
    new Animal("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
    new Animal("Gloria", "Hippo", ["grass", "reeds", "shoots"]),
];
export function getAnimal(name: string): Animal {
    return animals.find((animal) => animal.name == name);
}