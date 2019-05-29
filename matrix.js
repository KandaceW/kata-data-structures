module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
}

function getMatrix(n) {

  let arr = []
  let result = []

  for (let i = 0; i < n; i++) {
    arr.push(0)
  }

  for (let h = 0; h < n; h++) {
    result.push(arr)
  }

  return result
}

function updateMatrix(matrix, coords, value) {
  matrix[coords[0]][coords[1]] = value
  return matrix
}
