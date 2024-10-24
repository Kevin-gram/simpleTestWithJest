const sum = require('./sumOfNumbers');
test("this for sum of numbers function", () => {
    expect(sum(1,4)).toBe(5)
    expect(sum(10,50)).toBe(60)
    expect(sum(10,20)).toBe(30)
}
)