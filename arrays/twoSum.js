// return th indices of the two numbers whose sum makes the target number;
const arr = [3,2,4], target = 6;
// const arr = [2, 7, 11, 15],
//   target = 9;

// solution 1; // O(n)

// const findIndices = (arr = [], target) => {
//   const obj = arr.reduce((a, v, i) => ({ ...a, [v]: i }), {});
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[target - arr[i]] != undefined && i !== obj[target - arr[i]]) {
//       return [i, obj[target - arr[i]]];
//     }
//   }
// };

// solution 2; // O(n)

const findIndices = (arr = [], target) => {
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    const foundIndex = arr.indexOf(diff);
    if (foundIndex !== -1 && foundIndex !== i) return [i, foundIndex];
  }
};

console.log(findIndices(arr, target));
