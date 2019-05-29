function getPropTypes (obj) {
  var props = Object.values(obj)
  var arr = []
  for (var i=0; i<props.length; i++){
    arr.push(typeof props[i])
  }
  return arr
}


module.exports = getPropTypes