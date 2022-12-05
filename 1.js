function wrapping(gifts) {
  return gifts.map(gift => {
    const ribbon = "*".repeat(gift.length + 2)
    return `${ribbon}\n*${gift}*\n${ribbon}`
  })
}