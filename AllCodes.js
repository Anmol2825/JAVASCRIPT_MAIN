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
// const hoursMap = new Map(Object.entries(openingHour));//convert object into map
// console.log([..x]);//map to array by unpacking

//Strings
// const a = "anmolagarwal";
// console.log(a.slice(0, 5));
// console.log(a.replace('a', 'x'));
// console.log(a.replaceAll('a', 'x'));
// console.log("a+very+good+string".split('+'));//converts into array of strings
// const [firstName, lastName] = 'Anmol Agarwal'.split(' ');
// console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));//Joining arrays to a string
//Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'))//length to 23! is 25 and then last 5 + then length 30

//Functions
//Objects pass by refrence and string by value(string value is created as copy)

//call and apply methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iatacode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`);
//         this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name })
//     },
// };
// lufthansa.book(239, 'Anmol Agarwal');
// const eurowings = {
//     airline: 'eurowings',
//     iatacode: 'EL',
//     bookings: [],
// };
// const book = lufthansa.book;
// book.call(eurowings, 24, 'Kushagra Agarwal');
// const flightData = [27, "Jyoti Agarwal"];
// book.apply(eurowings, flightData);
// //or
// book.call(eurowings, ...flightData);
// //bind creates a new function
// const bookEw = book.bind(eurowings);
// bookEw(42, "Sachin Kumar");
// console.log(lufthansa);
// console.log(eurowings);

// Run Function Once
// Immidatily Invoked Function Expression
// (function () {
//     console.log('This will never run again');
// })();
// (() => console.log("this will not run again 2"))();

//Closures
// console.dir();
// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }
// g();
// f();

//Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// console.log(arr.slice(2));//-> gives array ['c', 'd', 'e']
// console.log(arr.slice(2, 4));//from 2 to 4
// console.log(arr.slice(-2));//print from last [d e]
// console.log(arr.slice(1, -2));//'b' 'c'
// console.log(arr.slice());//shalow copy of arr
// console.log([...arr]);//shalow copy way 2

//splice
// console.log(arr.splice(2));
// console.log(arr);//it actually removes element

//reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// arr2.reverse();

//concat
// const letters = arr.concat(arr2);
// console.log(letters);

//looping in arrays
// const movements = [200, 450, -1, 434, 43, 123, -12, -421, 0, 23];
//normal method
// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     }
//     else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// }
//For each
// console.log("FOR________EACH");
// movements.forEach(function (movement, i, arr) {//first element value,2nd index,3rd complete array
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     }
//     else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//     }
// })

//For each on Maps
// const currencies = new Map([
//     ['USD', 'United States Dollat'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling']
// ]);
// currencies.forEach(function (value, key, map) {
//     console.log(`${key}: ${value}`);
// })//first is value 2nd key and 3rd map

//For each in sets
// const currenciesUnique = new Set(['Usd', 'Gbp', 'Usd', 'Eur', 'Eur']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, value, set) {//1st and 2nd both values and third is set
//     console.log(`${value}: ${value}`);
// });

//DOM MANIPULATION
// containerMovements.insertAdjacentHTML('afterbegin');//4 ways beforebegin afterbegin beforeend after end (add html elements)


//3 methods (MAP FILTER REDUCE)
//1)Map Method(it has also 3 paramaters same as for each method)
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;
// });//returns an new array which is 1.1 times the movements array
//2)Filter Method(converts array into filtered new array with specific conditions)
//3)Reduce Method(reduce all elements in an array into a single variable)
//here first index is the accumulator
//its like a snowball which keeps accumulating all values
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     return acc + cur;
// },0)//0 initial value of accumulator

//Find Method
// movements.find(mov => mov < 0);//returns first element which statisfies the condition

// e.preventDefault();//prevent form from sumbitting

//FLAT METHOD
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());//flats the array into a single array(but it flattens only one time)
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
// console.log(arrDeep.flat(2));//2 level depth

//Flat Map(Combines flat and map together)
// const overBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overBalance);

//sort
//sort according to strings
//so we use compare function
// let movements = [17, 122, 4, 21, 53, 33];
// movements.sort((a, b) =>
//     // if (a > b) return 1;
//     // if (b > a) return -1;
//     a - b
// );//asscending
//for decending b-a;
// console.log(movements);
//Filling arrays and defining arrays
// const x = new Array(7);//creates a array of size 7;
// x.fill(1);//fills alll 7 values with 1
// x.fill(23, 4, 6)//fills 23 from position 4 to 6 excluding 6
// console.log(x);

//MATHS AND ROUNDING
// console.log(Math.PI * Number.parseFloat('10px') ** 2);//10px is the radius
// console.log(Math.trunc((Math.random() * 6) + 1))//used to convert into integer
// const randomInt = (min, max) =>
//     Math.trunc(Math.random() * (max - min) + 1) + min;//gives a value between max and min
// console.log(randomInt(24, 28));//value excluding 24

//Rounding Decimals
//toFixed(returns a string)
// console.log((2.7).toFixed(0));//0 decimal places ->3
// console.log((2.7).toFixed(3));//1 decimal places ->2.7
// console.log(+(2.7).toFixed(2));//2 decimal places ->2.70 + converts into int
//max safe integer
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
//Big int
// console.log(303973219834198721987n);
// console.log(BigInt(49387423974398374984739832));
//big int can perform operation with normal but can work together

//DATES
// const now = new Date();
// console.log(now);


//DOM Selection
//selecting full document
// console.log(document.documentElement);
// console.log(document.head);
// const allButtons=document.getElementsByTagName('button');(selecting by element tag)
// document.getElementsByClassName('btn')//class name

// Creating and Inserting Elements
// .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.append(message);
// header.before(message);//before header
// header.after(message);//after header

//Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//     message.remove();
// });


//STYLES ATTRIRBUTES AND CLASSES
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(message.style.backgroundColor);//only inline style get printed
// console.log(getComputedStyle(message).color);//this shows all properties here we choose color

// set css style
// document.documentElement.style.setProperty('--color-primary','orangered');

//Atributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.designer);//not standard property so wont work
// logo.alt = 'Beautiful minimalist logo'
//Non standard
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist');//absoulte
// console.log(logo.getAttribute('src'));

//Data attributes
// console.log(logo.dataset.versionNumber);

//Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//DOM
// section1.getBoundingClientRect();//it gets all the bottom up left right top width of the element
//window.pageXOffset, pageYOffset tells the amount of scroll we have got in x and y direction
//document.documentElement.clientHeight,document.documentElement.clientWidth (Tells us the clientHeight and clientWidth);

//Scrolling ways
// window.scrollTo(s1coords.left + window.pageXOffset, s1coords.right + window.pageYOffset);


//Smooth Scrooling
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//Modern ways
// section1.scrollIntoView({ behavior: 'smooth' });

//Mouseenter(when hovering the mouse pointer)
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// })


//DOM Traversing
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelector('.highlight'));//select all highlight class under h1 going complete deep
console.log(h1.childNodes);//select only just deep
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
//selecting closest element
h1.closest('.header').style.background = 'var(--gradient-secondary)';

//Going Sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);//get all siblings