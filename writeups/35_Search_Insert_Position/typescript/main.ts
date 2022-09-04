function searchInsert(nums: number[], target: number): number {
  let head: number = 0;
  let tail = nums.length - 1;
  while (head <= tail) {
    const center = Math.floor((head + tail) / 2);
    if (nums[center] === target) {
      return center;
    } else if (nums[center] < target) {
      head = center + 1;
    } else {
      tail = center - 1;
    }
  }

  return head;
}
