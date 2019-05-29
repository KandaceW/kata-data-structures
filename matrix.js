function getMatrix (n) {
  var matrix = [];
  for (var i= 0; i< n; i++){
    matrix[i] = [];
    for (var j = 0; j < n; j++){
      matrix[i][j] = 0
    }
  }
  return matrix
}
 
function updateMatrix (matrix, coords, value) {
  // var x = coords[0]
  // var y = coords[1]
 matrix[coords[0]][coords[1]] = value 

 return matrix
}

module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix,
}
