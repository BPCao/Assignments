
function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0)
        return 'Fizz Buzz';
    else if (num % 3 == 0)
        return 'Fizz';
    else if (num % 5 == 0)
        return 'Buzz';
    else
        return 'Invalid input'
}

console.log(fizzBuzz(15))