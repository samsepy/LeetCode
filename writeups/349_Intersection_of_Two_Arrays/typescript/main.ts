function intersection(nums1: number[], nums2: number[]): number[] {
  const setNums1 = new Set<number>(nums1);
  const setNums2 = new Set<number>(nums2);
  const intersectedNums: number[] = [];
  if (setNums1.size <= setNums2.size) {
    for (const x of setNums1) {
      if (setNums2.has(x)) intersectedNums.push(x);
    }
  } else {
    for (const x of setNums2) {
      if (setNums1.has(x)) intersectedNums.push(x);
    }
  }

  return intersectedNums;
}
