function getPropTypes(obj) {
  var values = Object.values(obj);
  var newArr = [];
  for (i = 0; i < values.length; i++) {
    newArr.push(typeof values[i]);
  }
  return newArr;
}
module.exports = getPropTypes;
