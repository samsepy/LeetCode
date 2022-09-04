# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  h = {}
  nums.each_with_index do |num, i|
    if h.has_key?(target - num)
      return [i, h.fetch(target - num)]
    else
      h[num] = i
    end
  end
end
