//log-> prints(like cout)
//let -> to define a datatype of variable(can be changed later(datatype))
//const ->same like let but value cant be changed(must have initial value)
//typeof -> tells the varaible datatype
//typeof(null) -> object(error of javascript)
//2**3=(2 to the power 3)=8


// Use of ``
// const a = "anmol's work"
// const anmol = `i am doing ${a}`;
// console.log(anmol);
// console.log(`hi
// what
// are
// you doing`)(this displaces in seperate line)

//Type Conversion and Coercion
// NaN=(it is a invalid number)
// console.log(Number("1331") + 10);//converts into int but doesnot change orignial datatype
// console.log(String(1331) + 10);//converts into string but doesnot change orignial datatype

// Type Coercion
// console.log('I am ' + 23 + ' years old');//(+ converts number to string)
// console.log('23' - '10' - 3);//(- * and / convert string to number)
// console.log('23' < '15'); (< converts string into number)

//truthy and falsy
//5 falsy values: 0, '', undefined, null, NaN all others are truthy values

//prompt(take input(displays a box where we can write))-->generates a string

//Strict mode
// 'use strict';(first code should be this)

//Functions
// function declartion(can be called before its declartion)
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// Function expression(can be only called after the declartiob)
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;-> it is required if we want to return
//     return `${firstName} retires in ${retirement} years`;
// }

// Arrays
// const years = new Array(1991, 1984, 2008, 2020);
// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay");//(pushes element to the last)
// friends.unshift("John");//(pushes element to the front)
// friends.pop()//(pops the last element)
// friends.shift()(pops the first element)
// friends.indexOf('Steven')(return index of element if element not present returns -1)
// friends.includes('Steven')(return true or false)

//Objects(contains key value pair)
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ["Micheal", "Peter", "Steven"]
// };
// console.log(jonas.firstName);(using dot notation)
// console.log(jonas['firstName'];(using bracket notation)

//Always to use strict mode
// 'use strict'

//Primitive Types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);


// //Refrence Types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage:', marriedJessica);//Both will display same result

// //Copying Objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };

// const jessicaCopy = Object.assign({}, jessica2)//real copy (new object is created)(creates shallow copy)
// jessicaCopy.lastName = 'Davis';
// console.log('Before marriage:', jessica2);
// console.log('After marriage:', jessicaCopy);

// Destructuring Arrays
// const arr = [2, 3, 4];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];
// console.log(x, y, z);
// const [a, b, c] = arr;//destruturing arrays(storing element in one go)
// const [a,,c]//(you can put a hole in the)
// console.log(a, b, c);


//Destructuring Objects
// const {write the data};


//Spread Operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];//(1,2,7,8,9)
// console.log(newArr);
// console.log(...newArr);//(logged the individual elemets of the array)
