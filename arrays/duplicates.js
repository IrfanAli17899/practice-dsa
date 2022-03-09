/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return true;
    else map[nums[i]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 1, 3, 1]));
