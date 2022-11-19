//These are importing what is needed for the following tests to work.
import { Animal } from "./animal";
import { getAnimal} from "./zoo";
//These consts are used to make the tests more streamlined such as using alex instead of getAnimal("Alex").
const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");
const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];
const badFood = ["shrimp", "potatoes", "pizza", "icecream"];
//These tests make sure that each animal likes the proper food and doesn't like bad food.
describe("feeding animals", () => {
    test ("Alex likes the food we expect", () => {
        lionFood.forEach((food) => {
            expect(alex.feed(food)).toBe(`Alex the Lion likes ${food}!`)
        })
    });
    badFood.forEach((food) => {
        expect(alex.feed(food)).toBe(`Alex the Lion does not like ${food}!`)
    })
        test("Marty likes the food we expect", () => {
            zebraFood.forEach((food) => {
                expect(marty.feed(food)).toBe(`Marty the Zebra likes ${food}!`)
            })
        });
badFood.forEach((food) => {
    expect(marty.feed(food)).toBe(`Marty the Zebra does not like ${food}!`)
})
test("Melman likes the food we expect", () => {
    giraffeFood.forEach((food) => {
        expect(melman.feed(food)).toBe(`Melman the Giraffe likes ${food}!`)
    })
});
badFood.forEach((food) => {
    expect(melman.feed(food)).toBe(`Melman the Giraffe does not like ${food}!`)
})
test("Gloria likes the food we expect", () => {
    hippoFood.forEach((food) => {
expect(gloria.feed(food)).toBe(`Gloria the Hippo likes ${food}!`)
    })
});
badFood.forEach((food) => {
    expect(gloria.feed(food)).toBe(`Gloria the Hippo does not like ${food}!`)
})
    });