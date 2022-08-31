def max_sub_array(nums)
  max_sum = nums.first
  for i in 1...nums.length do
    nums[i] = [nums[i - 1] + nums[i], nums[i]].max_sum
    max_sum = [max_sum, nums[i]].max
  end

  max_sum
end
