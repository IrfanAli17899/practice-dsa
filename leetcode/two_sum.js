const findIndices = (nums = [], target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.get(diff) !== undefined) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return []
};

const arr = [2, 7, 11, 15],
  target = 9;

console.log(findIndices(arr, target));
