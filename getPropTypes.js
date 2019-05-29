module.exports = getPropTypes;

function getPropTypes(obj) {
  console.log(obj);

  // var dataTypes = []

  var props = Object.values(obj);
  var arr = [];

  for (i = 0; i < props.length; i++) {
    var prop = props[i];
    arr.push(typeof prop);
  }

  console.log(props);

  return arr;
}
