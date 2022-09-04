function twoSum(nums: number[], target: number): number[] {
  const h = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff: number = target - nums[i];
    if (h.has(diff)) {
      return [h.get(diff), i];
    } else {
      h.set(nums[i], i);
    }
  }
}
