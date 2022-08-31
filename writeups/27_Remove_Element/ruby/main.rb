# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  k = 0
  nums.filter! do |x|
    if x != val
      k += 1

      true
    end
  end

  k
end
