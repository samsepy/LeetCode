function subarraySum(nums: number[], k: number): number {
  const h = new Map<string, number>();
  let subArraySum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const subArray: number[] = nums.slice(i, j).sort();
      const subArrayKey: string = subArray.join("-");
      h.set(
        subArrayKey,
        subArray.reduce((n1: number, n2: number) => n1 + n2),
      );
      if (h.get(subArrayKey) === k) subArraySum++;
    }
  }

  return subArraySum;
}
