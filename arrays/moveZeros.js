/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => { // naive solution
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  console.log(nums)
};

moveZeroes([0, 1, 0, 3, 12]);
