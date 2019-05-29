module.exports = getPropTypes;

function getPropTypes(obj) {
  // let myArray = []
  // Object.keys(obj).map(function(item) {
  //   myArray.push (typeof obj[item])
  //   });
  //   return myArray

  // let myArr = Object.keys(obj).map(function(item) {
  //   return typeof obj[item];
  // });
  // return myArr;

  return Object.keys(obj).map(item => typeof obj[item]);
}
