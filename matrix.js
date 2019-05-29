module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
};

function getMatrix(n) {
  //console.log(n)
  var newArr = [];
  var completeArr = [];

  for (i = 0; i < n; i++) {
    newArr.push(0);
  }

  for (i = 0; i < n; i++) {
    completeArr.push(newArr);
  }
  return completeArr;
}
//create an array of arrays that is n x n
// n is an intiger

function updateMatrix(matrix, coords, value) {
  // console.log(matrix)
  // console.log(coords)
  // console.log(value)

  var pos1 = coords[0];
  var pos2 = coords[1];

  console.log(pos1);
  console.log(pos2);

  matrix[pos1][pos2] = value;

  return matrix;
}
//can change the value at specified coordinates
