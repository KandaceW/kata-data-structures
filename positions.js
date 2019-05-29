function getFirst(arr) {
  return arr[0];
}

//'positions.getFirst gets the first item in an array

function getLast(arr) {
  var i = arr.length;
  // console.log(arr.length)
  return arr[i - 1];
}

//positions.getLast gets the last item in a small array

module.exports = {
  getFirst: getFirst,
  getLast: getLast
};
