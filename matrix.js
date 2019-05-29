module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix,
}

function getMatrix(n) {
  var cells = []


  for (var i = 0; i < n; i++) {
    cells[i] = [];
    for (var j = 0; j < n; j++) {
      cells[i][j] = 0;
    }
  }
  return cells
}



function updateMatrix(matrix, coords, value) {
  // matrix[coords[0]][coords[1]] = value
  // return matrix
  
  var x = coords[0]
  var y = coords[1]
  matrix[x][y] = value
  return matrix

}