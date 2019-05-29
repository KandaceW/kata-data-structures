module.exports = getPropTypes

function getPropTypes (obj) {
   const keys = Object.values(obj)
   var arr = []
   for(var i = 0; i < keys.length; i++){
      arr.push(typeof keys[i])
   }
   return arr
}
