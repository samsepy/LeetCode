function intersection(nums1: number[], nums2: number[]): number[] {
  const setNums1 = new Set<number>(nums1);
  const setNums2 = new Set<number>(nums2);
  const intersectedNums: number[] = [];
  for (const x of setNums1) {
    if (setNums2.has(x)) intersectedNums.push(x);
  }

  return intersectedNums;
}
