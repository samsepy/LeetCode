# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  count = 0
  nums.filter! do |x|
    if x == 0
      count += 1

      false
    else
      true
    end
  end
  count.times do
    nums.push(0)
  end
end
