function subarraySum(nums: number[], k: number): number {
  let cumulativeSum: number = 0;
  let count: number = 0;
  const h = new Map<number, number>([[0, 1]]);
  for (let i = 0; i < nums.length; i++) {
    cumulativeSum += nums[i];
    count += h.get(cumulativeSum - k) ?? 0;
    h.set(cumulativeSum, (h.get(cumulativeSum) ?? 0) + 1);
  }

  return count;
}
