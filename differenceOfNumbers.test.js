const diffeneceOfNumbers = require('./differenceOfNumbers')
test("this for difference of numbers function",()=>{
    expect(diffeneceOfNumbers(1,4)).toBe(-3)
    expect(diffeneceOfNumbers(4,3)).toBe(1)
    expect(diffeneceOfNumbers(7,23)).toBe(-16)
})