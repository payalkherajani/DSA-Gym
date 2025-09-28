// Refer Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        let tempMaxProfit = 0
       if(prices[i] < min) {
         min = prices[i]
       }

       tempMaxProfit = prices[i+1] - min
       if(tempMaxProfit > maxProfit) {
        maxProfit = tempMaxProfit
       }

    }
    return maxProfit
};