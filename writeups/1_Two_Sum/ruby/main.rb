# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  return [0, 1] if nums.length == 2

  nums.each_with_index do |x, i|
    nums[i+1..].each_with_index do |y, j|
      return [i, i+j+1] if (x + y) == target
    end
  end
end

