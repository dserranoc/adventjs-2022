function distributeGifts(packOfGifts, reindeers) {
  const giftWeights = packOfGifts.map(gift => gift.length)
  const packWeight = giftWeights.reduce((acc, item) => acc + item, 0)
  const reindeersMaxWeights = reindeers.map(reindeer => reindeer.length * 2)
  const maxWeight = reindeersMaxWeights.reduce((acc, item) => acc + item, 0)

  return Math.trunc(maxWeight / packWeight)
}