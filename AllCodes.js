//Always to use strict mode
// 'use strict'

//Open Project in live server
// live-server

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
// let x = "1331";
// console.log(typeof (Number(x) + 10));//converts into int but doesnot change orignial datatype here x type is same
// console.log(String(1331) + 10);//converts into string but doesnot change orignial datatype



// Type Coercion
// console.log('I am ' + 23 + ' years old');//(+ operator converts number to string)
// console.log('23' - '10' - 3);//(- * and / operator convert string to number)
// console.log('23' < '15'); (< operator converts string into number)



//truthy and falsy
//5 falsy values: 0, '', undefined, null, NaN all others are truthy values



//prompt(take input(displays a box where we can write))-->generates a string
// let x = prompt("What you want to ask","sample input");



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
// marriedJessica.lastName = 'Davis';//(changes will be reflected in both)
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


//Selectors & Click Events(JAVASCRIPTS PART)
// document.querySelector('.')//. for class
// document.querySelector('#')//# for id
// document.getElementById('id_name')// get id
// document.querySelector('.').textContent="";
// document.querySelector('.').value = 23;
//document.querySelector('.check').addEventListener('click',function(){
//})
// document.querySelector('body').style.backgroundColor = '#60b347';
// document.querySelectorAll('.show-modal');//selects all query with class show-modal
// modal.classList.add('hidden')(removing and adding classes)
// modal.classList.remove('hidden')
//3 types of keyboard events keyup(when we lift up the keypress),keypress(when we are pressing the key),keydown(when we just press the key and release)
// document.addEventListener('keydown', function (event) {
//     if (event.key === "Escape") {
//         closeModal;
//     }
// });
// used for escape key

//var is function scoped not block scoped where as const and let are block scoped

//Hoisting
// Makes some types of variables accessible/usable in the code before they are actually declared

//Function Declrations are hoisted(function value)
//var variables are hoisted(undefined)
//const let are not hoisted(unitialized)

// Destructuring Arrays
// const arr = [2, 3, 4];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];
// console.log(x, y, z);
// const [a, b, c] = arr;//destruturing arrays(storing element in one go)
// const [a,,c]//(you can put a hole in the)
// console.log(a, b, c);

//Switiching Variables
// let [main, , secondary] = restaurant.categories;
// //Switching variables
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);


//Destructuring Objects
// const {write the data};
//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj)//store in () as we cant start with {

//Spread Operator(unpacking of array)
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];//(1,2,7,8,9)
// console.log(newArr);
// console.log(...newArr);//(logged the individual elemets of the array)

//Rest Operator(packing)(opposite of spread)
// rest is when on left side of equal sign
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// others becomes a array

//And and Or Operator (Special Features)

//ShortCircuting Or
// if first value true it will return that
// (3 || "Jonas") --> 3
// if both false return last value
// (undefined || null) --> null

//AND
//(0&&"Jonas")--> 0 as we get falsy we return it
//(7&&"Jonas")--> Jonas Last true value

//Nullish sees nullish value instead of false value
//(0 ?? "Jonas")--> 0
// console.log(null ?? "Jonas");-->Jonas

//Optional Chaining
// console.log(resturant.openingHours.mon?.open);

//Set
// const x = new Set(["hi", "hi", 5, "hello"]);//same values taken as one

//Map
// const x = new Map();
// x.set(5, "hi");
// x.set("you", 6);
// console.log(x.get("you"));
// console.log(x);
const hoursMap = new Map(Object.entries(openingHour));//convert object into map
