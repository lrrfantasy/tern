export default (start, end) => {
  const [x0, y0] = start
  const [x1, y1] = end
  const dx = (x1 - x0) / 2
  const dy = (y1 - y0) / 2
  const curve = dx >= 0 ? `${x0+dx+dy} ${y0+dy-dx}` : `${x0+dx-dy} ${y0+dx+dy}`
  return `M ${start.join(' ')} Q ${curve} ${end.join(' ')}`
}
