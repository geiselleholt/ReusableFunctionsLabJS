// ****PART 1 ****
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
        longestString = aString[i]
    }
  }
  return longestString;
}

let myStrings = ["Bob", "Patrick", "Sandy", "Squidward"];
console.log(findLongestString(myStrings));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let longStrings = [];
function findLongStrings(number, arrayOfStrings) {
    arrayOfStrings.forEach(string => {
        if (string.length > number) {
            longStrings.push(string)
        }
    });
    return longStrings
}

let myStrings2 = ["Bob", "Patrick", "Sandy", "Squidward"];
let myNumber = 5
console.log(findLongStrings(myNumber, myStrings2))

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function practiceRecursion(n) {

}