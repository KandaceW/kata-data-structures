module.exports = getPropTypes 

function getPropTypes (obj) {
    console.log (obj)
    var props = Object.values(obj)
    var newArr = []
    for(var i = 0; i < props.length; i++){
        newArr.push(typeof props[i])
    }
    return newArr
}
