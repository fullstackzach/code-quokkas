const candleHeights = [3, 3, 1, 3, 2, 3]



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

candleHeights.filter(candle => candle === Math.max(...candleHeights)).length // ?