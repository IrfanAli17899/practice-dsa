// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   const string = x.toString();
//   for (let i = 0, j = string.length - 1; i !== j; i++, j--) {
//     if (string[i] !== string[j]) {
//       return false;
//     }
//   }
//   return true;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  return x === reverseInteger(x);
};

/**
 * @param {number} x
 * @return {number}
 */
var reverseInteger = (x) => {
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed;
};

console.log(isPalindrome(-121));
