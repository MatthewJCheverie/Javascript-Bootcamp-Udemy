// comments are the same here as in java 
// javascript has one type of number works with all numbers
// example of numbers below
13
13.1

// operations addition, subtraction, division, multiplaction, modulo, exponet
3 + 4 
1.5 + 8
12 - 4.567
4 * 1.2
4 / 2
27 % 2
2 ** 3
// precedence still remains
3 - 9 * 2
(3 - 9) * 2
// Nan - not a number
0 / 0
NaN
// infinty
1 / 0
Infinity
// 0 and negative 0
0
-0

// Variables are where we store values to create we must use let
let age = 72;
let hens = 4;
let roosters = 2;
hens + roosters
age = age + 1;

// cant just name variables anything best to avoid keywords in the javascript syntax
// document is special 
document
// variables must make sense and correlate to what you want to express
// camelcase
let numOfHens = 6;
// cant do
let averageRating = 9.7;
let averageRating = 0;
let score = 0;
score = score + 10;
// faster way to add, subtract, etc
score += 1;
score -= 1;
score *= 5;
let counter = 0;
// unary operator 
counter++;
counter++;
counter++;
counter--;

// const is similar to let except you cannot change the value
// more uses in arrays and objects
const year = 1973;
year++;
// doesnt work
const peopleCount = 10;
let people = 3;

// var is an older way to declare variables not much use cases today but is legacy in alot of sites
var eggs = 12;
eggs