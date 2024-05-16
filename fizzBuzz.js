function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
}

console.log(fizzBuzz(1));  // Should return 1
console.log(fizzBuzz(3));  // Should return "Fizz"
console.log(fizzBuzz(5));  // Should return "Buzz"
console.log(fizzBuzz(15)); // Should return "FizzBuzz"
console.log(fizzBuzz(18)); // Should return "Fizz"
console.log(fizzBuzz(20)); // Should return "Buzz"
console.log(fizzBuzz(7));  // Should return 7