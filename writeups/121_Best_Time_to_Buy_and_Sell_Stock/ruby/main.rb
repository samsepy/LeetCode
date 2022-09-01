# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  max_profit = 0
  prices.each_with_index do |x, i|
    prices[i+1..].each_with_index do |y, _|
      if x < y
        profit = y - x
        if (profit > max_profit)
          max_profit = profit
        end
      end
    end
  end

  max_profit
end
