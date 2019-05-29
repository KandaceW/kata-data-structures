function getMatrix (n) {
  
  var matrix = []

  var arr = []
  for (var i=0; i<n; i++){
    arr[i] = 0
    

  }

for (var i=0; i<n; i++) {
  matrix[i] = arr
}return matrix
}


function updateMatrix (matrix, coords, value) {

var row = coords[0]
var col = coords[1]
matrix[row][col] = value
return matrix

  console.log (matrix)
  console.log (coords)
  console.log (value)

}

module.exports = {

  getMatrix: getMatrix,
  updateMatrix: updateMatrix,

}
