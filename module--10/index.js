
//1. calculateDifference 
function calculateDifference(a, b) {
  return a - b;
}
console.log("1. calculateDifference(10, 4) -", calculateDifference(10, 4));


//2. isOdd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(`2. isOdd(7) -  ${isOdd(7)}`);
console.log(`2. isOdd(4) -  ${isOdd(4)}`);


//3. findMin
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log("3. findMin([5,3,9,1,7]) -", findMin([5, 3, 9, 1, 7]));


//4. filterEvenNumbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(`4. filterEvenNumbers([1..6]) -  ${filterEvenNumbers([1,2,3,4,5,6])}` );


//5. sortArrayDescending 
function sortArrayDescending(arr) {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] > newArr[i]) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }
  return newArr;
}
console.log(`5. sortArrayDescending([3,1,4,5,9]) -  ${sortArrayDescending([3, 1, 4, 5, 9])}`);


//6. lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  let firstLetter = str[0].toLowerCase();
  let restOfString = str.slice(1);
  return firstLetter + restOfString;
}
console.log("6. lowercaseFirstLetter('Hello') -", lowercaseFirstLetter("Hello"));


//7. findAverage 
function findAverage(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
console.log("7. findAverage([10,20,30,40]) -", findAverage([10, 20, 30, 40]));


//8. isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("8. isLeapYear(2024) -", isLeapYear(2024));
console.log("8. isLeapYear(1900) -", isLeapYear(1900));
console.log("8. isLeapYear(2000) -", isLeapYear(2000));