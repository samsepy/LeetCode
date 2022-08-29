class KthLargest
  attr_reader :k, :nums

  def initialize(k, nums)
    @k = k
    @nums  = nums
  end

  def add(val)
    nums.push(val).sort!.reverse!

    nums[k-1]
  end
end
