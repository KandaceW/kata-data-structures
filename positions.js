module.exports = {
  getFirst: getFirst,
  getLast: getLast
}

function getFirst(arr) {
  return arr[0]
}

function getLast(arr) {
  return arr.slice(-1)[0]
}
