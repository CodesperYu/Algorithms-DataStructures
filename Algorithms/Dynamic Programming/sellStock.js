const maxProfit = (prices) => {
  let buyPrice = prices[0];
  let bestSellProfit = 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    console.log(buyPrice, bestSellProfit);
    const currPrice = prices[i];
    const currTradeProfit = currPrice - buyPrice - 2;
    if (bestSellProfit === 0 && currPrice < buyPrice) {
      buyPrice = currPrice;
    } else if (currTradeProfit > bestSellProfit) {
      bestSellProfit = currTradeProfit;
    } else if (bestSellProfit > 0 && currPrice + 2 <= prices[i - 1]) {
      buyPrice = currPrice;
      profit += bestSellProfit;
      bestSellProfit = 0;
    }
  }
  return profit += bestSellProfit;
};

const test = [1, 3, 2, 8, 4, 10];
const test2 = [6, 3, 2, 8, 4, 10];
const test3 = [1, 3, 2, 8, 4, 10, 9, 25];
console.log(maxProfit(test));
console.log(maxProfit(test3));
