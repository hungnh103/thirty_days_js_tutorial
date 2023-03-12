const statement = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'

const points = statement.match(/-?\d+/g)
const minPoint = points.shift()
const maxPoint = points.pop()
const distance = maxPoint - minPoint // 20
