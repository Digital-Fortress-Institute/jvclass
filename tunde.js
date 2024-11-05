// outputting data
// alert("Helo world");
// document.write('Hello world');
// window.confirm('Aer you sure tou want to delete this?');
// console.log(myName);

// syntax used to set a variable 
// let;
// const;
// var;

// let myNamE = 40;
// let myName = 10;

// console.log(++myName);

// variable  is like a container to store data
// avoid keywords
// you can't start with numbers and some charaters except underscore
// use camel casing

// let x = 10;
// let _name= 'John';
// let lastName = 'Doe';

// creation of programe using prompt, parseInt, parseFloat
// let myName = prompt('Enter your name');
// console.log(myName);
// alert(myName)

// let num1 = 10;
// console.log(num1)
// let x = parseInt(prompt('Enter your first number'));
// console.log(x)


// create programme that prompt you name in the console
// create a programme that display you best food to the browser
// create a programme that helps to to acknowledge to delete a programe   

// let ourName=prompt('Enter your name');
// console.log(ourName);


// let myfood = prompt('Enter your best food');
// alert(myfood);
// document.write(myfood);

// let tunde = prompt('Enter your name');
// window.confirm('Are you sure you want to delete '+tunde);

// concartination this is the process of joining two variables together;

// let firstName = 'John';
// let lastName = 'Doe';


// console.log('my name is'+ ' '  +firstName+ ' ' + lastName+ ' '+ 'and i currently live in USA');
// console.log(firstName, lastName);

// contination with template litrals

// console.log(` My name is ${firstName} ${lastName} and i currently live in USA`)



// create a programe that takes in three different numbers and sum up the three numbers together showing all the values added togther to get the final value




// let firstNumber = parseInt(prompt('Enter your first number'));
// let secondNumber = parseInt(prompt('Enter your second number'));
// let thirdNumber = parseInt(prompt('Enter your third number'));
// console.log(`${firstNumber} + ${secondNumber} + ${thirdNumber} = ${firstNumber+secondNumber+thirdNumber}`);

// data types;10

// number
// let num1 = 10;
// console.log(num1.toPrecision(4))
// console.log(num1.toFixed(4))
// --num1
// console.log(num1)
// console.log(typeof(num1));

// tenary operator
// console.log(num1 > 10 ? (`
//     <div>
//     <h1>Welcome</h1>
//     </div>
    
//     `): (` 
//         <div>
//           <h1> You are not Welcome</h1>
//         </div>
// `));

// strings datatypes these are alpha numeric data;
// let yourName = 'John Doe lives in '
// let address= '47, Herberty Macauly Road, Off \'University\' Road, Akoka Yaba, Lagos State';
// console.log(address.slice(0,12));k 
// console.log(address.length);
// console.log(address.lastIndexOf('e'));
// console.log(address.replace('Lagos', 'Ogun'));
// console.log(address.toLowerCase());
// console.log(address.toUpperCase());
// console.log(yourName.concat(address));
// console.log(address.includes('Road'));
// console.log(address.endsWith('e'));
// console.log(address.startsWith('4'));
// console.log(address.trim());
// console.log(address.substring('10'));
// let x = address.split(' ');
// console.log(x.reverse('').join(' '));
// x.pop();
// x.shift();

// x.reverse();
// x.splice(2, 0, 'Welcome');
// x[2]='Yellow'
// console.log(x);
// console.log(typeof(address));

// array datatypes this is listing out various of item in a square bracket;

// let colors = ['blue', 'orange', 'purple', 'gold', 'black'];
// colors.unshift('cream')
// colors.push('white')
// console.log(colors)


// let employee = [

//   {
//     name:'John Doe',
//     state:'Texas',
//     occupation:['Software Developer', 'Data Analyst'],

//   },
//   {
//     name:'Wale Tola',
//     state:'Lagos State',
//     occupation:'Data Science',

//   },
//   {
//     name:'Emeka Obinna',
//     state:'Abia',
//     occupation:'DevOps Engineer',

//   },

// ];
// let x = employee[0]['occupation'][1];

// console.log(x);


// object datatype is a key and value pair data type

  // let person = {
  //   name:'Emeka Obinna',
  //   state:'Abia',
  //   occupation:'DevOps Engineer',
  // };

// console.log(person['name']);

// boolean datatype a true or false data type
// let tunde = false;
// console.log(tunde ? 'yrs':'no');
// console.log(typeof(tunde));

// comparison operator;
// let num1 = 20;
// let num2 = 10;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);
// console.log(num1 == num2);
// console.log(num1 === num2);

// arithmetic operator 
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 += num2);
// console.log(num1 -= num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);
// console.log(++num1);
// console.log(--num1);

// logical operator && || ;

// let age = 10;
// let country = 'Nigeria';

// if( age >= 18 && country == 'Nigeria'){
//   console.log('You can vote')
// }else{
//   console.log('You can not vote')
// };

// let score = prompt('Enter your Score').toUpperCase();

// if (score == 'A'){
//   console.log('Excellent')
// }else if( score == 'B'){
//   console.log('Second grade')
// }else if (score == 'C'){
//   console.log('Grade')
// }else{
//   console.log('Unknown Result')
// }

// switch (true){
//   case score == 'A':
//     console.log('Excelent')
//     break;
//   case score == 'B':
//     console.log('Second grade')
//     break;
//   case score == 'C':
//     console.log('Third Grade')
//     break
//   default:
//     console.log('Invalid Entry')
// }



// let tunde = ''
// console.log(typeof(tunde));
// let tunde2= String()
// console.log(typeof(tunde2));



let world = 'Hello Class \'your\' are welcome to';
// let address = 'Digital Fortress Institute';
// console.log(world.includes('Class'));
// console.log(world.substring(4));
// console.log(world.slice(0, 10));
// console.log(world.replace('Class', 'Club'))
// console.log(world.split(' '));

// console.log(world.trim());
// console.log(world.trimEnd());
// console.log(world.trimStart());

// let x= world.split(' ');
// console.log(x.reverse().join(' '));

// console.log(world.startsWith('H'));
// console.log(world.endsWith('o'));

// console.log(world.repeat(3));
// console.log(`${world} ${address}`);
// console.log(world, address);
// console.log(world+ ' ' + address);
// console.log(address.indexOf('i'));
// console.log(address.toUpperCase());



// let num = parseInt(prompt('Enter a nunber'));

// if(num % 2 == 0 && num % 3 == 0){
//   console.log('FizzBuzz')

// }else if ( num % 3 == 0 ){
//   console.log('Fizz')
// }else {
//   console.log('Buzz')
// }

// let age = prompt('Enter your age')
// if (age >= 18){
//   console.log('You Can Vote');
// }else{
//   console.log('you can not vote')
// };

// let number= parseInt(prompt('Enter a number'));
// if (number > 0){
//   console.log('positive')
// }else if(number < 0 ){
//   console.log('negative')
// }else{
//   console.log('Zero')
// }

// let x = 0;
// let product = 2

// while (x <= 10){
//   x++
//   console.log(`${product} x ${x} = ${product * x}`)
// }

// for( let i = 0; i<=10; i++){

//  console.log(`${product} x ${i} = ${product * i}`)
// }

// let color = ['blue', 'red', 'pink', 'Purple'];
// console.log(color)
// for(let i of color){
//   // console.log(i)
//   if(i[0] == 'P' || i[0] == 'p'){
//     console.log(i)
//   }
// }

// let num1 = parseInt(prompt('Enter your first number'));
// let num2 = parseInt(prompt('Enter your second number'));
// let num3 = parseInt(prompt('Enter your second number'));

// if(num1 > num2 && num1 > num3){
//   console.log('Num1 is greater')
// }else if (num2 > num2 && num2 > num3){
//   console.log('Num2 is the greater')
// }else{
//   console.log(
//     'Num3 is greater'
//   )
// }


// let score = parseInt(prompt('Enter your score'));

// if (score >= 90 && score <=100){
//   console.log('Grade A')
// }else if(score >= 70 && score <=89){
//   console.log('Grade B')
// }else if(score >= 50 && score <=69){
//   console.log('Grade c')
// }else if(score >= 40 && score <=49){
//   console.log('Grade C')
// }else if(score >= 0 && score <=39){
//   console.log('Fail')
// }else {
//   console.log('Unknown Result')
// }




// let salary = parseInt(prompt('Enter your salary'))

// let tax1 = (salary * 10) / 100;
// console.log(tax1)

// let tax2 = (salary * 20)/ 100
// let tax3 = (salary * 30)/ 100

// if (salary <= 5000){
//   console.log(`Your total earning after tax is ${salary -  tax1}`)
// }else if( salary > 5000 ){
//   console.log(`Your total earning after tax is ${salary -  tax2}`)
// }else{
//   console.log(`Your total earning after tax is ${salary -  tax3}`)
// }



// let num1 = parseInt(prompt('Enter your first number'));
// let num2 = parseInt(prompt('Enter your second number'));

// if(num1 + num3 == 100){
//   console.log('The sum of both numbers is 100')
// }else{
//   console.log('greater than or less than')
// }


// let age = parseInt(prompt('Enter your age'));

// if(age > 60){
//   console.log('You are elegible for a senior citizen')
// }else{
//   console.log('You are not elegible for a senior citizen')
// }


// function tunde () {
//   console.log('Good morning');
// }
// tunde();
// tunde();
// tunde();
// tunde();
// tunde();

// function myclass(x, y){
//   // return `${x} good morning`
//   return x + y
// }
// console.log(myclass('John'))
// console.log(myclass(10, 20));



// let myplus = (a, b) => {
//   return a * b
// }
// console.log(myplus(10, 20))


// let mypower = (x) => {
//   return x** 2
// }
// console.log(mypower(10));
// // higher order functions
// let score = [10, 26, 30, 32, 39, 52, 21, 90 ];
// console.log(score.filter((x) => x % 2 == 0));
// console.log(score.reduce((x,y) => x + y));
let myname = document.getElementById('tunde')
let getApi = async() => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  console.log(data);

  myname.innerHTML = data.map((x) => {
    return(
       `
       <h1>${x.title}</h1>
       <p>${x.body}</p>
       `
    )
  }).join(' ')

}
getApi();































