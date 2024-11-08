// QUESTION A NO1
// NUMBER 1
let firstword ="welcome"
let lastword ="cast"

// function checkNumber(num) {
//     if (num % 2 === 0) {
//         console.log("BUZZ");
//     } else if (num % 3 === 0) {
//         console.log("FIZZ");
//     } else {
//         console.log("The number is neither even nor divisible by 3.");
//     }
// }
// SECTION 2 NO1
// let number=prompt('enter a numbrt')
// number=parseInt(number);
// if (isNaN (number)){
//    console.log('invalid inpup. please');

// } else if(number % 2===0){
//     console.log ('BUZZ')
// }
// if (number / 3 ){
//     console.log('FIZZ')
// }

//     let grade=prompt('enter your grade');
//     if(grade < 0 || grade > 100 ) {
//       console.log('grade must be between 1 to 100');
//     }else if (grade >= 90) {
//       console.log('grade A');
//     }else if (grade >= 70) {
//       console.log('grade B');
//     }
//     else if (grade >= 50) {
//         console.log('grade C');
//     }else if (grade >= 40) {
//       console.log('fail');
//     }else {
//       console.log('unknown Result');
//     }


    

    


//     var i , j;
//     var n =prompt('enter the value of n');
//      i=1;
//     while('i<=10');{
//       j=n*i;
//       document.write(n+"*"+i+"="+j);
//       document.write("<br>");
//       i++;
//     }



    // let number1 = prompt('Enter the first number');
    // let number2 = prompt('Enter the second number');

    // if (isNaN(number1) || isNaN(number2)) {
    //   console.log('Input must be digits.');
    // } else {
    //   number1 = parseFloat(number1);
    //   number2 = parseFloat(number2);

    //   if (number1 > number2) {
    //     console.log(`${number1} is larger.`);
    //   } else if (number2 > number1) {
    //     console.log(`${number2} is large.`);
    //   } else {
    //     console.log('Numbers are equal.');
    //   }
    // }




    //     let salary = prompt('Enter your salary');
    // let numSalary = parseFloat(salary);

    // if (isNaN(numSalary)) {
    //   console.log('Invalid input. Please enter a number.');
    // } else {
    //   let tax;

    //   if (numSalary <= 5000) {
    //     tax = numSalary * 0.10;
    //   } else if (numSalary <= 10000) {
    //     tax = numSalary * 0.20;
    //   } else {
    //     tax = numSalary * 0.30;
    //   }

    //   console.log(Your salary: $${numSalary.toFixed(2)});
    //   console.log(Your tax: $${tax.toFixed(2)});
    //   console.log(Net salary: $${(numSalary - tax).toFixed(2)});
    // }

    // let firstnumber=prompt('enter number1:');
    // let secondnumber=prompt('enter number2:');
    // firstnumber = parseFloat(firstnumber);
    // secondnumber = parseFloat(secondnumber);

    // if(isNaN(firstnumber)||isNaN(secondnumber)){
    // console.log('invalid input.please enter number');
    // }else{
    //   let sum=firstnumber+secondnumber;

    //   if(sum>100){
    //     console.log('sum is greater tham 100');
    //   }else{
    //     if(sum<100)
    //     console.log('sum is less than 100');
    //   }
    // }





    // let age= prompt('enter your age');
    // age = parseInt(age);
    // if(isNaN(age)){
    //   console.log('invalid input.please input number');
    // }else if(age >60){
    //   console.log('You are eligible for a senior citizen discount');
    // }else if(age <60){
    //   console.log('you are not eligible for senior citizen discount');
    // }





    // let number=prompt('enter a number');
    // number=parseInt(number);
    // if(isNaN(number)){

    //   CONSOLE.LOG('invalid input. please enter number');

    // }else if(number % 2 ===0){
    //   console.log('BUZZ')
    // } 
    // if(number / 3){
    //   console.log('FIZZ')
    // }


    // let age= prompt('enter your age');
    // age = parseInt(age);
    // if(isNaN(age)){
    //   console.log('invalid input.please input number');
    // }else if(age >18){
    //   console.log('You can vote');
    // }else if(age <18){
    //   console.log('you cant not vote');
    // }


    
    // let number = prompt('enter number:');
    // number = parseInt(number);

    // if (isNaN(number)) {
    //   console.log('invalid input.please enter number');
    // } else if ('number > 0'); {
    //   console.log('number is positive');
    // } elseif ('number < 0'); {
    //   console.log('number is nigative');
    // }elseif('number ==0');{
    //   console.log('zero');
    // }


    
// let firstWord = "Hello";
// let lastWord = "World";

// let greeting = firstWord + " " + lastWord;
// console.log(greeting);

// // Section 1 Q10 answer

// let substrings = greeting.split(" ");
// console.log(substrings);

// // Section 1 Q13 answer

// let reversed = substrings.reverse().join("");
// console.log(reversed);


// // Section 1 Q15 answer
// let i = 0;
// while (i < 3){
//     console.log("Hello");
//     i++;
// }


// //SECTION 2

// // Section 2 Q1 answer

// let number = prompt("Enter your Number: ");

// if (number % 2 == 0 && number % 3 == 0){
//     console.log("FizzBuzz");
// }

// else if (number % 2 == 0){
//     console.log("Buzz");
// }
// else if (number % 3 == 0){
//     console.log("Fizz");
// }
// else{
//     console.log("Odd");
// }

// // Section 2 Q2 answer

// let userAge = prompt("Enter you Age: ");
// let eligibleAge = userAge >= 18 ? "You can vote" : "You cannot vote";

// console.log(eligibleAge);

// // Section 2 Q3 answer

// let UserNumber =parseInt(prompt("Enter your Number: "));

// if (UserNumber == 0){
//     console.log("Zero");
// }

// else if (UserNumber > 0){
//     console.log("Positive");
// }
// else{
//     console.log("Negative");
// }

// // Section 2 Q4 answer

// let userTable = prompt("Enter the Number: ");
// let numbers = 1;
// // let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// while (numbers <= 12){
//     console.log(userTable * numbers);
//     numbers++;
// }
 
// // Section 2 Q5 answer

// let firstNumber = prompt("Enter the first number");
// let secondNumber = prompt("Enter the second number");

// let greaterNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
// console.log(greaterNumber);

// // Section 2 Q6 answer

// // let result = prompt("Enter your Score: ");

// switch (true){
//     case result >= 90:
//         console.log("A")
//         break;
//     case result >= 89:
//         console.log("B")
//         break;
//     case result >= 69:
//         console.log("C")
//         break;
//     case result >= 49:
//         console.log("Fail")
//         break;
//     default:
//         console.log("Unknown Result")
// }

// // Section 2 Q7 answer

// let salary = prompt("How much do you earn: ");

// if (salary > 10000) {
//     tax = Math.round((0.3 * salary));
// }
// else if (salary > 5000){
//     tax = Math.round(0.2 * salary);
// } 
// else{
//     tax = Math.round(0.1 * salary);
// }

// console.log(`Your tax is: ${tax}`);

// // Section 2 Q8 answer

// let sum1 =parseInt(prompt("Enter the first number: "));
// let sum2 = parseInt(prompt("Enter the second number: "));

// let sum = sum1 + sum2 > 100 ? "Sum greater than 100" : "Sum not greater than 100";
// console.log(sum);

// // Section 2 Q9 answer

// let x = parseInt(prompt("Enter the first number"));
// let y = parseInt(prompt("Enter the second number"));
// let z = parseInt(prompt("Enter the third number"));


// if (x > y && x > z){
//     console.log(x);
// }
// else if (y > x && y > z){
//     console.log(y);
// }
// else{
//     console.log(z)
// }

// // Section 2 Q10 answer

// let eligibleSenior = parseInt(prompt("Enter your age: "));

// let seniorCitizen = eligibleSenior >= 60 ? "You are eligible for a senior citizen discount" : "You are eligible not for a senior citizen discount";

// console.log(seniorCitizen);

// Section 2 Q11 answer
// Same as Q9




let myname = document.getElementById('fela')
let getApi = async() => {
  let response = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAS95a7clyHlAyoNHfQom8wfRPzCWBEccA&maxResults=50');
  let data = await response.json();
  console.log(data);

  myname.innerHTML = data.items.map((x) => {
    return(
       `
      <a href=${`https://www.youtube.com/watch?v=${x.id.videoId}`}>
      <img src=${x.snippet.thumbnails.medium.url}>
      <p>${x.snippet.description}<p>
      <a>
       `
    )
  }).join(' ')

}
getApi();