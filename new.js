/*Variables*/

var myName;
myName = "Saideep";

var state = "Maharashtra";

console.log("My Name is " + myName + " and I stay in the state of " + state);

state = "Goa";

console.log("New State " + state);

/*Data Types
There are 7 Data Types in JS */

//Boolean

var data = false;

if(data) {
    console.log("Booleans rule!");
}
else {
    console.log("Booleans are lame.");
}

//null

var n = null;
console.log(n * 32);

//undefined
var a;
console.log(a + 2);

//Number
var num = 3.6;
var ber = 6.4;
console.log(num + ber);

//String
var name = "Sai";
console.log("Hi my name is " + name);

//Symbol
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));

//Object
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
console.log(myCar.make);

//Numbers
var number = 12;
// number /= 5;
console.log(++number);
console.log(number);

//Strings
var myNames = "Sai";
var sentence = "He said \"Hi!\""; //He said Hi!
console.log(sentence);
var sentence = "He said 'Hi!'";
console.log(sentence);

var fullName = "Sai " + "Dicholkar"; // Sai Dicholkar
console.log(fullName);

var sentence2 = 'My name is ' + fullName; // My name is Sai Dicholkar
console.log(sentence2);

console.log(fullName += ' is my name'); // Sai Dicholkar is my name

// String: [Bracket Notation]
var firstName = "Sai";
console.log(firstName[firstName.length - 3]);
//firstName[0] = "A";
firstName = "Saideep"
console.log(firstName);


/* 20 String Methods */

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
// Gives UNICODE value of character
console.log(stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("to"));

// fromCharCode()
// Convert UNICODE to actual character
console.log(String.fromCharCode(115));

// includes()
console.log(stringTwo.includes("end"));

// indexOf()
console.log(stringTwo.indexOf("end"));

// lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

// match()
console.log(stringTwo.match(/end/g));

// repeat()
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));

// slice()
console.log(stringTwo.slice(2, 4));

// split()
console.log(stringOne.split(" "));

// startsWith()
console.log(stringOne.startsWith("free"));

// substr()
console.log(stringTwo.substr(2, 4)); 

// substring()
console.log(stringTwo.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringOne.toUpperCase());

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim());


/* Function */

// Parameter pass in function
function square(number) {
    return number * number;
}

console.log(square(4));

// Default function
// Global and Local function
var someVar = "Hat";
function myFun() {
    var someVar = "Shoes";
    console.log(someVar);
}

myFun();
console.log(someVar);

console.log(addSquares(1, 3));
function addSquares(a, b) {
    function squareNew(x) {
        return x * x;
    }
    return squareNew(a) + squareNew(b);
}
a = addSquares(2, 3); // returns 13
console.log(a);
b = addSquares(3, 4); // returns 25
console.log(b);
c = addSquares(4, 5); // returns 41
console.log(c);


/* Hoisting */
// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

// console.log(definedLater);
var definedLater;
definedLater = 'I am defined!'
console.log(definedLater);

console.log(definedSimultaneously);
var definedSimultaneously = 'I am defined!';
console.log(definedSimultaneously);

doSomethingElse();
function doSomethingElse() {
    console.log('I did it!');
}

// functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function() {
    console.log('I did it!');
}

/* Comparison Operators & If ... Else */

var isFCCGreat = true;

if(isFCCGreat) {
    console.log("Free Code Camp is amazing!");
}
else {
    console.log("Free Code Camp is horrible!")
}

// Comparison Operators: < > <= >= == !=

var age = 10;

if(age >= 18) {
    console.log("You are an adult!");
}
else if(age >= 13 && age <= 17) {
    console.log("You are a teenager!");
}
else if(age < 2) {
    console.log("You are a baby!");
}
else {
    console.log("You are a child!");
}
if(age != 18) {
    console.log("You are not eighteen!");
}

/* == vs === */

// == abstract eqaulity

// === strict equality

console.log(3 == "3");
console.log(3 === "3");

console.log(true == '1');
console.log(true === '1');

console.log("This is a string." == new String("This is a string."));
console.log("This is a string." === new String("This is a string."));


/* Null vs Undefined */

var test
console.log(test)

test = null
console.log(test)

console.log(typeof null)
console.log(typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null === null)
console.log(null == null)
console.log(!null)
console.log(null)
console.log(!!null)
console.log(1 + null)
console.log(1 + undefined)

/* Logical Operators && Short Circuit Evaluation */

// AND: &&      OR: ||

num = 6
if(num > 5 && num < 10) {
    console.log("Unicycle!")
}

// Short Circuit Evaluation

if(4 > 5 && 5 > 6) {
    console.log("Hi")
}
else {
    console.log("No")
}

var test = true;
var isTrue = function() {
    console.log("Test is true.");
};
var isFalse = function() {
    console.log("Test is false");
};

/* if(test) {
    isTrue();
} */

( test && isTrue() );

test = false;
if(!test) {
    isFalse();
}

( test || isFalse() );


function theSameOldFoo(name) {
    name = name || 'Bar';
    console.log("My best friend's name is " + name);
}
theSameOldFoo();
theSameOldFoo('Sai');


/* Ternary Operator */

// condition ? expr1 : exp2

var age = 19;

if(age >= 18) {
    console.log("You're an adult!");
}
else {
    console.log("You're a kid!");
}
age = 15;
console.log((age >= 18) ? "You're an adult!" : "You're a kid!");


var stop;

age > 18 ? (
    console.log("OK, you can go."),
    stop = false
) : (
    console.log("Sorry, you are too much young!"),
    stop = true
);


var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

console.log(access);


/* Switch Statements */

let day;
switch(new Date().getDay()) {
    case 0: day = "Sunday";
            break;
    case 1: day = "Monday";
            break;
    case 2: day = "Tuesday";
            break;
    case 3: day = "Wednesday";
            break;            
    case 4: day = "Thursday";
            break;
    case 5: day = "Friday";
            break;
    case 6: day = "Saturday";
            break;
}
console.log(day);

var Animal = 'Chicken'
switch(Animal) {
    case 'Cow':
    case 'Giraffe':
    case 'Dog':
    case 'Pig':
        console.log('This animal will go on Noah\'s Ark');
        break;
    case 'Spoon':
        console.log('A spoon is not an animal!');
        break;
    case 'Dinosaur':
    default:
        console.log('This animal will not be on the Ark.');
}


/* Arrays */

var sandwich = ["peanut butter", "jelly", "bread"];

var teams = [["Bulls", 23], ["White Sox", 45]];

console.log(sandwich[1]);

sandwich[1] = "bananas";
console.log(sandwich);

console.log(teams[1][0]);

teams[1][0] = "red socks";
console.log(teams);

sandwich.forEach(function(element) {
    console.log(element);
});


/* 10 Common Array Methods */

var arr = ["a", "b", "c"];

arr.push("d");
console.log(arr);

console.log(arr.pop());
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2));
console.log(arr2);

console.log(arr.join("!"));

console.log(arr.reverse());
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("p"));
console.log(arr);

console.log(arr.slice(1,3));

arr.push("i");
arr.push("f");
arr.sort(arr);
console.log(arr);

console.log(arr.splice(2, 2, "JS NUggets"));
console.log(arr);