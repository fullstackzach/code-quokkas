/*
You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she'll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 3, 3, 1, 2, she will be able to blow out 2 candles successfully, since the tallest candles are of height 3 and there are such candles.
Create a function: birthdayCakeCandles. It must return an integer representing the number of candles she can blow out.
birthdayCakeCandles has the following parameter: arr - an array of integers representing candle heights.
Taken from:
https://www.florin-pop.com/blog/2019/03/jcc-birthday-cake-candles/
*/


const candleHeights = [3, 3, 1, 3, 2, 3]

// O(n) solution
let i = 0
let tallest = 0
let tallestCount = 0
candleHeights.length //?
while (i < candleHeights.length) {
  if (candleHeights[i] > tallest) {
    tallest = candleHeights[i]
    tallestCount = 1
  } else if (candleHeights[i] === tallest) {
    tallestCount++ //?
  }
  i++
}
tallest //?
tallestCount //?

// solution 1
candleHeights.filter(candle => candle === Math.max(...candleHeights)).length // ?