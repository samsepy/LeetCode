function twoSum(nums: number[], target: number): number[] {
  const h = new Map<number, number>();
  let a: number[];
  nums.forEach((num, i) => {
    const diff: number = target - num;
    if (h.has(diff)) {
      a = new Array(h.get(diff), i);
    } else {
      h.set(num, i);
    }
  });

  return a;
}
