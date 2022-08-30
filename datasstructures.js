// Imagine: A group of people are going on a camping trip. 
//- Sarah pays $400 for the car rental, which is used by Alice, John, Bob, and herself.
//-John spends $100 on groceries for Alice and Bob.

// Part 1: Given a list of payments and people who used the item, figure out who owes who what for each user. You decide how you want to structure the list

const payments = [
	{
		amount: 400,
		paidBy: 'Sarah',
		peopleWhoUsedTheService: ['John', 'Alice', 'Bob', 'Sarah']
	},
  {
    amount: 100, 
    paidBy: 'John',
    peopleWhoUsedTheService: [ 'Alice', 'Bob']
  },
	{
		amount: 300,
		paidBy: 'Alice',
		peopleWhoUsedTheService: ['John', 'Bob', 'Sarah']
	},
]

const calculateBalances = (paymentsList) => {
	// loop through the array of payments
	// for each payment, find the people who used the payment
	// divide the amount equally, and the equal amounts should 
  // be owed by people who used the service
  // const total = parseInt().value;
  // const people = paymentsList;

	// { 'Alice': { Bob: 100, John: 100 }, 'Bob': { 'Alice': 100, John: 100 } }
	const balances = {}

	for (let i = 0; i < paymentsList.length; i++) {
		const payment = paymentsList[i]
    const balance = payment.amount / payment.peopleWhoUsedTheService.length

		payment.peopleWhoUsedTheService.forEach(user => {
			if (payment.paidBy !== user) {
				if (!balances[user]) {
					balances[user] = {}
				}
				balances[user][payment.paidBy] = balance
			}
		})
	}

	return balances
}

console.log(calculateBalances(payments))

// Write a program that takes in two arrays as argument with one array having more integers and return the extra integers.
// Sample Input: [1,2,3,34,56,83], [3,2,56]
// Expected Output: [1,34,83]

// loop through one of those arrays, check if each value in that array is in the other array. if it's there, then skip, if it's not, then save that value in an array to return later


const getArrayDifferences = (arrayA, arrayB) => {
	// const extraIntegerA = arrayA.filter((0) => arrayB.indexOf(0)== -1);
	// return extraIntegerA==

	// const extraIntegers = []

	// for (let i = 0; i < arrayA.length; i++) {
	// 	const integer = arrayA[i]
	// 	const valueExists = arrayB.find(val => val === integer)

	// 	if (!valueExists) {
	// 		extraIntegers.push(integer)
	// 	}
	// }

	return arrayA.filter(val => arrayB.find(val2 => val !== val2))
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//For example:

//
function even_or_odd(number) {
  
    if (number % 2 === 0)
      {
        return "Even";
      
      }
      
    else {
      
      return "Odd";
    }
    
    
  }


  // You get an array of numbers, return the sum of all of the positives ones.

  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
  // Note: if there is nothing to sum, the sum is default to 0.

  function positiveSum(arr) {
    let sum = 0;
  
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum


}

// reversed strings 
// janice to ecinaj

function solution(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
solution('janice');

//  remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    let newStr = ''
    for(let i = 0; i < x.length; i++) {
        if(x[i] !== " "){
            newStr += x[i]
        }
    }
    return newStr
}

// find multiples of three and Five
function solution(number){
  let sum = 0;    for(let i=1; i<number; i++) {        
    if(i % 3 === 0 || i % 5 === 0){            
      sum += i;        
    }    
  }    
  return sum;
}

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Example:

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();
  
  for (let i = 0; i < alphabet.length-1; i += 1) {
    if (str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  
  return true;
}

//solution two

function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

// one
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;

}

// two better imo

function sumMix(x){
  return x.reduce((x, y) => Number(x) + Number(y), 0);
}

// pagination helper 5kyu

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
    return -1;
  }
  
  return this.itemsPerPage - Math.ceil((((pageIndex + 1)*this.itemsPerPage)%this.itemCount())%this.itemsPerPage);
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
    return -1;
  }
  
  return Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1;
}

// Small enough? - Beginner 7kyu

const smallEnough = (a, limit) => !a.some((e) => e > limit);

// best practice 

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

smallEnough = (a, l) => a.every(e => e <= l)

function smallEnough(a, limit){
  return a.every(x => x <= limit);
}


// Range Extraction

function rangeExtraction(list) {
  var len = list.length;
  var out = [];
  var i, j;
 
  for (i = 0; i < len; i = j + 1) {
    // beginning of range or single
    out.push(list[i]);
 
    // find end of range
    for (var j = i + 1; j < len && list[j] == list[j-1] + 1; j++);
    j--;
 
    if (i == j) {
      // single number
      out.push(",");
    } else if (i + 1 == j) {
      // two numbers
      out.push(",", list[j], ",");
    } else { 
      // range
      out.push("-", list[j], ",");
    }
  }
  out.pop(); // remove trailing comma
  return out.join("");
}
// best practices

function solution(list){
  for(var i = 0; i < list.length; i++){
     var j = i;
     while(list[j] - list[j+1] == -1) j++;
     if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
 }
 return list.join();
}

function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

solution = (list)=>list.reduce((acc,curr,i) => {
  if (i==0) return curr.toString();
  if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
  if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
  return acc+","+curr;
});


// Nesting structure comparison 4kyu

Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  if (this.length !== other.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (isArray(this[i]) && isArray(other[i])) {
      if (!this[i].sameStructureAs(other[i])) { return false; }
    } else if (!isArray(this[i]) && isArray(other[i])) {
      return false;
    } else if (isArray(this[i]) && !isArray(other[i])) {
      return false;
    }
  }
  return true
};


//Introduction
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

//my answer
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

// directions reduction 

function dirReduc(arr){
  const opposites = {'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return arr.reduce((acc, cur) => (opposites[acc.slice(-1)] === cur ? acc.pop() : acc.push(cur), acc), [])
}

/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters 
can be rearranged to match str2, otherwise returns false.
*/

//mine - less efficient:

function scramble(str1, str2) {
  
  const reducer = (container, element) => {
     if(container[element] === undefined) {
       container[element] = 1;
       return container;
     } else {
       container[element] += 1;
       return container;
     }
   }
   
   var container1 = str1.split('').reduce(reducer,{});
   
   var container2 = str2.split('').reduce(reducer,{});
   
   for (var prop in container2) {
     if(!container1[prop]) return false;
     
     if(container1[prop] < container2[prop]) return false;
   }
   return true;
 }

 // good practise i

 function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}


/* 
Conway's Game of Life - Unlimited Edition

Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP, C: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e. */


function getGeneration(cells, generations){

  var ce = JSON.parse(JSON.stringify(cells));

  var minY;
  var maxY;
  var minX;
  var maxX;

  for (var i = 1; i <= generations; i++) {
    expandUniverse();

    ce = ce.map(function(r, row){return r.map(function(c, col){return setValue(row, col, -c);});});

    getBoundaries();
    shrinkUniverse();
  }

  function setValue(row, col, sum) {
    for (var r = row - 1; r <= row + 1; r++)
      for (var c = col - 1; c <= col + 1; c++)
        sum += (ce[r] && ce[r][c]) | 0;

    return +(sum == 3 || sum == 2 && ce[row][col]);
  }

  function getBoundaries() {
    minY = maxY = minX = maxX = -1;
    
    ce.forEach(function(r, row){r.forEach(function(c, col){
      if (c == 1) {
        minY = minY == -1 ? row : Math.min(minY, row);
        maxY = maxY == -1 ? row : Math.max(maxY, row);
        minX = minX == -1 ? col : Math.min(minX, col);
        maxX = maxX == -1 ? col : Math.max(maxX, col);
      }
    });});
  }

  function expandUniverse() {
    var a = [], b = [];

    ce[0].forEach(function(){a.push(0); b.push(0);});

    ce.unshift(a);
    ce.push(b);
    ce.map(function(i){i.unshift(0); i.push(0);});
  }

  function shrinkUniverse() {
    ce = ce.map(function(e){ return e.slice(minX, maxX + 1);});
    ce = ce.slice(minY, maxY + 1);
  }

  return ce;
}

/* 
Powers of 2 8kyu
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).



*/

function powersOfTwo(n){
  let result = [];
  
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  
  return result;
}


// best practice 

function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

function powersOfTwo(n) {
  return Array.from({length: n + 1}, (v, k) => 2 ** k);
}

/* Adding big numbers 4kyu

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.*/



/*

Catching Car Mileage Numbers 4kyu
Description:
"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers
Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
Error Checking
A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.
*/

const chars = n => n.toString().split('')
const match = s => n => new RegExp(n).test(s)

const tests = [
  match('1234567890'),                     // incremental
  match('9876543210'),                     // decremental
  n => /^\d[0]+$/.test(n),                 // all zeroes
  n => n == chars(n).reverse().join(''),   // palindrome
  n => [...new Set(chars(n))].length === 1 // repeated
]

const test = (n, xs) => n > 99 &&
  (xs.indexOf(n) > -1 || tests.map(t => t(n)).some(x => !!x))

const isInteresting = (n, xs) =>
  test(n, xs) ? 2 : +(test(n + 1, xs) || test(n + 2, xs))

  /* 
  Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.
By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.


  */

function longestSlideDown (pyramid) {
  return pyramid.reduceRight((last,current)=>current.map(
    (v,i)=>v+Math.max(last[i],last[i+1])
  ))[0];
}

/*
rail fence encoding 3kyu

DCreate two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string. You can optionally include or dis-include punctuation.
For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:
W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    
The encoded string would be:
WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.
Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.
For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.


const calcFu = (x)=> (i)=> {return Math.abs(x - ((i+x) % (x*2)));};

function encodeRailFenceCipher(string, numberRails) {
  if (string.length === 0) return "";
  let fence = Array.from(Array(numberRails), () => new Array());
  let calcFu_i = calcFu(numberRails-1);
  
  [...string].forEach((c,i)=>{
    fence[calcFu_i(i)].push(c)
  })
  return fence.reduce((acc,c)=>{
    return acc + c.join('');
  },'');
}

function decodeRailFenceCipher(string, numberRails) {
  let fence_tot = Array(numberRails).fill(0);
  let fence = Array.from(Array(numberRails), () => new Array());
  let calcFu_i = calcFu(numberRails-1);
  let appo = [...string];
  appo.forEach((c,i)=>{
    fence_tot[calcFu_i(i)] += 1; 
  });
  fence_tot.forEach((tot,i)=>{
    fence[i] = appo.splice(0, tot);
  });
  let res = "";
  for (let i = 0; i < string.length; i++) {
    res += fence[calcFu_i(i)].shift();
  }
  return res;
}