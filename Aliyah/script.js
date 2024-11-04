
// SECTION 1

// Section 1 Q5 answer

let firstWord = "Hello";
let lastWord = "World";

let greeting = firstWord + " " + lastWord;
console.log(greeting);

// Section 1 Q10 answer

let substrings = greeting.split(" ");
console.log(substrings);

// Section 1 Q13 answer

let reversed = substrings.reverse().join("");
console.log(reversed);


// Section 1 Q15 answer
let i = 0;
while (i < 3){
    console.log("Hello");
    i++;
}


//SECTION 2

// Section 2 Q1 answer

let number = prompt("Enter your Number: ");

if (number % 2 == 0 && number % 3 == 0){
    console.log("FizzBuzz");
}

else if (number % 2 == 0){
    console.log("Buzz");
}
else if (number % 3 == 0){
    console.log("Fizz");
}
else{
    console.log("Odd");
}

// Section 2 Q2 answer

let userAge = prompt("Enter you Age: ");
let eligibleAge = userAge >= 18 ? "You can vote" : "You cannot vote";

console.log(eligibleAge);

// Section 2 Q3 answer

let UserNumber = prompt("Enter your Number: ");

if (UserNumber == 0){
    console.log("Zero");
}

else if (UserNumber > 0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

// Section 2 Q4 answer

let userTable = prompt("Enter the Number: ");
let numbers = 1;
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

while (numbers <= 12){
    console.log(userTable * numbers);
    numbers++;
}

// Section 2 Q5 answer

let firstNumber = prompt("Enter the first number");
let secondNumber = prompt("Enter the second number");

let greaterNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(greaterNumber);

// Section 2 Q6 answer

// let result = prompt("Enter your Score: ");

switch (true){
    case result >= 90:
        console.log("A")
        break;
    case result >= 89:
        console.log("B")
        break;
    case result >= 69:
        console.log("C")
        break;
    case result >= 49:
        console.log("Fail")
        break;
    default:
        console.log("Unknown Result")
}

// Section 2 Q7 answer

let salary = prompt("How much do you earn: ");

if (salary > 10000) {
    tax = Math.round((0.3 * salary));
}
else if (salary > 5000){
    tax = Math.round(0.2 * salary);
} 
else{
    tax = Math.round(0.1 * salary);
}

console.log(`Your tax is: ${tax}`);

// Section 2 Q8 answer

let sum1 =parseInt(prompt("Enter the first number: "));
let sum2 = parseInt(prompt("Enter the second number: "));

let sum = sum1 + sum2 > 100 ? "Sum greater than 100" : "Sum not greater than 100";
console.log(sum);

// Section 2 Q9 answer

let x = parseInt(prompt("Enter the first number"));
let y = parseInt(prompt("Enter the second number"));
let z = parseInt(prompt("Enter the third number"));


if (x > y && x > z){
    console.log(x);
}
else if (y > x && y > z){
    console.log(y);
}
else{
    console.log(z)
}

// Section 2 Q10 answer

let eligibleSenior = parseInt(prompt("Enter your age: "));

let seniorCitizen = eligibleSenior >= 60 ? "You are eligible for a senior citizen discount" : "You are eligible not for a senior citizen discount";

console.log(seniorCitizen);

// Section 2 Q11 answer
// Same as Q9
