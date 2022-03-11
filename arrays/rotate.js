const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop())
//     }
//     console.log(nums);
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    
  console.log([...nums.slice(-k), ...nums.slice(0, -k)]);
};

rotate(nums, k);
