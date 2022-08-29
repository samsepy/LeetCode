class KthLargest
  attr_reader :k, :nums

  def initialize(k, nums)
    @k = k
    @nums  = nums.sort!.reverse!
  end

  def add(val)
    if k > nums.length
      @nums = nums.push(val).sort!.reverse!

      return nums[k-1]
    end
    
    if val > nums[k-1]
      nums.unshift(val)
      @nums = nums[0..(k-1)].sort.reverse + nums[k..]
    end

    nums[k-1]
  end
end
