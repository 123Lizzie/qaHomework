//This imports from the animal.ts so we can create new animals.
import { Animal } from "./animal";
let animals: Array<Animal> = [
    //These are creating new animals for the feedTest.test.ts to test.
    new Animal("Alex", "Lion", ["meat"]),
    new Animal("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
    new Animal("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
    new Animal("Gloria", "Hippo", ["grass", "reeds", "shoots"]),
];
//This allows the export of the created animals and them to be gotten by name.
export function getAnimal(name: string): Animal {
    return animals.find((animal) => animal.name == name);
}