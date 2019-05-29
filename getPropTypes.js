module.exports = getPropTypes

function getPropTypes(obj) {
  var newObj = Object.values(obj)

  var count = []

  for (var i = 0; i < newObj.length; i++) {
    count.push(typeof newObj[i])
  }
  return count
}