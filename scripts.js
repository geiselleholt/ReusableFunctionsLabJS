// ****PART 1 ****
console.log("*** PART 1 ***");

// Take an array of numbers and return the sum.
function sumOfArray(arrayOfNums) {
  let sum = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbers));

// Take an array of numbers and return the average.
function averageOfNums(arrayOfNums) {
  let sum = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum / arrayOfNums.length;
}

let numbers2 = [5, 4, 3, 2, 1];
console.log(averageOfNums(numbers2));

// Take an array of strings and return the longest string.
let longestString = "";

function findLongestString(aString) {
  for (let i = 0; i < aString.length; i++) {
    if (aString[i].length > longestString.length) {
      longestString = aString[i];
    }
  }
  return longestString;
}

let myStrings = ["Bob", "Patrick", "Sandy", "Squidward"];
console.log(findLongestString(myStrings));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let longStrings = [];
function findLongStrings(number, arrayOfStrings) {
  arrayOfStrings.forEach((string) => {
    if (string.length > number) {
      longStrings.push(string);
    }
  });
  return longStrings;
}

let myStrings2 = ["Bob", "Patrick", "Sandy", "Squidward"];
let myNumber = 5;
console.log(findLongStrings(myNumber, myStrings2));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function practiceRecursion(n) {}

// **** PART 2 ****
console.log("*** PART 2 ***");

const givenData = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.

givenData.sort((a, b) => a.age - b.age);
console.log(givenData);

// Filter the array to remove entries with an age greater than 50.
// givenData.forEach((obj) => {
//   obj.age = +obj.age;
//   if (obj.age > 50) {
//     index = givenData.indexOf(obj);
//     givenData.splice(index, 1);
//   }
// });

// givenData.filter((item) => item.age <= 50);

for (let i = 0; i < givenData.length; i++) {
  if (givenData[i].age > 50) {
    index = givenData.indexOf(givenData[i]);
    givenData.splice(index, 1);
  }
}

console.log(givenData);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const newGivenData = givenData.map(obj => {
    obj.age = +obj.age;
    return { ...obj, job: obj.occupation};
});
 newGivenData.forEach(obj => {
     delete obj.occupation
     obj.age = obj.age + 1
 });

console.log(newGivenData);
  
// Use the reduce method to calculate the sum of the ages.
let sumUsingRedcue = newGivenData.reduce(function (acc, obj) { return acc + obj.age; }, 0);

console.log(sumUsingRedcue)

// Then use the result to calculate the average age.
console.log(sumUsingRedcue / newGivenData.length)


//*** PART 3 ***/
console.log('*** PART 3 ***')
// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.

// Take an object, make a copy, and increment the age field of the copy. Return the copy.

// For each of the functions, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
