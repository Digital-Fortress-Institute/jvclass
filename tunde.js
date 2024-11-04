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

















