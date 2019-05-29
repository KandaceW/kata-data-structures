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

function updateMatrix(matrix, coords, value) {}
