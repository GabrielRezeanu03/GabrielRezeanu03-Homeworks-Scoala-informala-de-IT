//    HOMEWORK   //

// 1.display in the console the numbers from 1 to 20 //
const num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// 2.display in the console the odd numbers from 1 to 20 //
console.log(num);
const isOdd = (n) => (n & 1) === 1;
console.log(`Odd numbers are ${num.filter((n) => isOdd(n))}`);

// 3.compute the sum of the elements of an array and display it in the console //
var arr = [4, 8, 7, 13, 12];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("The sum of the elements is" + " " + sum);

// 4.compute the maximum of the elements of an array and display it in the console //
function largest(arr1) {
  let i;

  // Initialize maximum element
  let max = arr1[0];

  // Traverse array elements
  // from second and compare
  // every element with current max
  for (i = 1; i < arr.length; i++) {
    if (arr1[i] > max) max = arr1[i];
  }

  return max;
}
let arr1 = [10, 324, 45, 90, 9808];
console.log("Largest in given array is " + largest(arr1));

// 5.compute how many times a certain element appears in an array //
var arr2 = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array, value) {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}

console.log(getOccurrence(arr2, 1)); // 2
console.log(getOccurrence(arr2, 3)); // 3
