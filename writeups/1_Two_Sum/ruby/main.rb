# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  return [0, 1] if nums.length == 2

  h = {}
  nums.each_with_index do |num, i|
    h[i] = num
  end

  nums.each_with_index do |num, i|
    h[i] = nil
    return [i, h.key(target - num)] if h.value?(target - num)
  end
end
