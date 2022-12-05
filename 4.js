function fitsInOneBox(boxes) {
  return boxes
    .sort((box, next) => box.l - next.l)
    .every((box, index) => {
      if (index === boxes.length - 1) return true
      const next = boxes[index + 1]
      const fits = box.l < next.l && box.w < next.w && box.h < next.h
      return fits
    })
}