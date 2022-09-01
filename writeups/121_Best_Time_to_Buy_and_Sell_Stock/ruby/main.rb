# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  max_profit = 0
  prices.each_with_index do |x, i|
    prices[i+1..].each_with_index do |y, _|
      profit = y - x
      max_profit = [profit, max_profit].max
    end
  end

  max_profit
end
