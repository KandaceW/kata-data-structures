function getPropTypes (obj) {
  var vals = Object.values(obj)
  var props = vals.map((element) => {return typeof element})
  return props
}
module.exports = getPropTypes