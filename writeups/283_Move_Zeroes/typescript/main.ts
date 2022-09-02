/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): number[] {
  const count: number = nums.filter((x) => x === 0).length;
  for (let i = 0; i < count; i++) {
    nums.splice(nums.indexOf(0), 1);
    nums.push(0);
  }

  return nums;
}
