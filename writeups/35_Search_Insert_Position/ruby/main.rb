# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
  head = 0
  tail = nums.length - 1

  while head <= tail
    center = (head + tail) / 2
    if nums[center] == target
      return center
    elsif nums[center] < target
      head = center + 1
    else
      tail = center - 1
    end
  end

  head
end
