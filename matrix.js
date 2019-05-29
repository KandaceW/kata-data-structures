module.exports = {
  getMatrix: getMatrix,
  updateMatrix: updateMatrix
};

function getMatrix(n) {
  let count = n;
  let myArray = [];
  let matrix = [];
  while (count !== 0) {
    count--;
    myArray.push(0);
  }
  while (matrix.length < n){
    matrix.push(myArray)
  }
  return matrix
}

function updateMatrix(matrix, coords, value) {}
//at index of
