# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  max_sum = nums.first
  nums.each_with_index do |_, i|
    nums.each_with_index do |_, j|
      break if i + j > nums.length - 1

      sum = nums[i..i+j].sum
      max_sum = sum if sum > max_sum
    end
  end
  
  max_sum
end
