/*function sum(N) {
    let total = 0;
    for (let i = 1; i <= N; i++) {
        total += i;
    }
    alert(total);
}
sum(120);

function sum(N) {
    let total = 0;
    for (let i = 1; i <= N; i++) {
        total += i;
    }
    return total;
}
alert(sum(10));
*/
/*for (let i = 1; i <= 100; i++) {
    if (i%2 != 0)
    {
    console.log(i);
    }
  }
  
  let total = 1;
  for (let i = 1; i <= 5; i++) {
total *= i;
  }
  console.log("The answer is " + total);

  for (let i = 0; i <= 5; i++) 
  {
    if (i%2 === 0) 
    {
      console.log(i + " is even");
    }
    else 
    {
      console.log(i + " is odd");
    }
  }

  for (let i = 100; i >= 1; i--){

  console.log(i);}

  let result = 0;
  for (let i = 1; i <= 20; i++) {
    if (i%2 === 0) 
    {
  console.log(i);
  result += i;
    }
  }
  console.log("The answer is " + result);

  for (let i = 1; i <= 100; i++) 
  {
    if (i%3 === 0) 
    {
  console.log(i);
    }
  }

  for (let i = 1; i <= 19; i++) {
    if (i%2 != 0) {
      //console.log(i * i);
      console.log(Math.pow(i, 2));
    }
  }

  for (let char = 'a'; char <= 'z'; char++) {
    console.log(char);
  }
  
  console.log("Multiplication table of 10\n");
  const num = 10;
  for (let i = 1; i <= 10; i++) {
    //console.log(num + " * " + i + " = " + num * i);
    console.log(`${num} *  ${i} = ${num * i}`);
  }

let myPlaces = ["Barcelona", "London", "Japan", "New Zealand", "Sidney", "Berlin", "Ibiza", "Tanzania", "Thailand", "Paris"];
//console.log(myPlaces);


let traveled = myPlaces.pop();
console.log(`I have been to ${traveled} 10 years ago.`);


myPlaces.push("Denmark");
console.log(myPlaces);

let maybeNextTime = myPlaces.shift();
console.log(myPlaces);
console.log(maybeNextTime);

myPlaces.unshift("Chech Republic");
console.log(myPlaces);


let numbers = [10, 45, 34, 98, 2, 7];

numbers.splice(3,1);//to remove an element by index
console.log(numbers);

//numbers.indexOf(34); 
// to find the value of an element within the array
/*
numbers.sort();
console.log(numbers);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(numbers.reduce(reducer)); 
// sum of all numbers in an array

// or

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
sum += numbers[i];// sum of all numbers in an array
}
console.log((sum / numbers.length).toFixed(2)); 
// to calculate the average number in an array 
/*
let fruits = ["apple", "pear", "mango", "pineapple", "orange"];
fruits.sort(); // to sort the array alphabetically
console.log(fruits);


let numbers = [10, 45, 34, 98, 2, 7];
console.log(numbers.includes(34));

let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = i + 1;
}
console.log(numbers);
// to populate numbers from a 'for loop' to an array

or 

 // numbers[i] = Math.pow(i + 1, 2); to square all the numbers in an array
 

let numbers = [10, 45, 34, 98, 2, 7];
let x = numbers.slice();
console.log(x); //copy of an array and reassigning



let numbers = Array(10).fill(1);
let square = numbers.map((x, i)=> x = Math.pow(i + 1, 2));
console.log(square); 
// square of elements using 'map' method
*/