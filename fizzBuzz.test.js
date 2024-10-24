const fizzBuzz = require("./fizzbuzz")
test("this for fizzbuzz function",()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz")
    expect(fizzBuzz(5)).toBe("Buzz")
    expect(fizzBuzz(3)).toBe("Fizz")
})