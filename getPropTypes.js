module.exports = getPropTypes

function getPropTypes (obj) {

  // // console.log(typeof obj['a'])
  // // console.log(Object.keys(obj))
  // // console.log(Object.values(obj))

  // let arrayOfValues = Object.values(obj)

  // let typesOfValues = []

  // for (let i = 0; i < arrayOfValues.length; i++) {
  //   let item = arrayOfValues[i]

  //   // console.log(typeof item)

  //   typesOfValues.push(typeof item)

  // }

  // return typesOfValues

  return Object.values(obj)
  .map(
    function(x){
      return typeof x
    })



}
