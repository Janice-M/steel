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