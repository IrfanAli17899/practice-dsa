/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

// naive solution; //
// space complexity O(n)
// time complexity O(n)
// function reverseArray(a) {
//   // Write your code here
//   const arr = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     arr.push(a[i]);
//   }
//   return arr;
// }

// Better solution; //
// space complexity O(1)
// time complexity O(n)
function reverseArray(a) {
  // Write your code here
  //   for (let i = 0, j = a.length - 1; i < j; ) {
  // a[i] = a[j] + ((a[j--] = a[i++]), 0);
  //   }

  for (let i = 0, j = a.length - 1; i < j; i++, j--) {
    [a[i], a[j]] = [a[j], a[i]]; // swap by reference;
  }
  return a;
}

console.log(reverseArray([1, 2, 3, 4]));
