# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  h = {}
  nums.each_with_index do |num, i|
    diff = target - num
    if h.has_key?(diff)
      return [h.fetch(diff), i]
    else
      h[num] = i
    end
  end
end
