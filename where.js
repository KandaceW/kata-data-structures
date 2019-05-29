function where(arr, searchDetails) {
  // var values = Object.values(searchDetails)
  // var keys = Object.keys(searchDetails)
  // var result = []


  // for (var i = 0; i < arr.length; i++) {
  //   if (values.length < 2) {
  //     if (arr[i][keys[0]] == values[0]) {
  //       result.push(arr[i])

  //     }
  //   } else if (arr[i][keys[0]] == values[0] && arr[i][keys[1]] == values[1]) {
  //     result.push(arr[i]) 
  //   }
  // }
  // return result


  var values = Object.values(searchDetails)
  var keys = Object.keys(searchDetails)
  var result = []
  var isMatch = false
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (arr[i][keys[j]] == values[j]) {
        isMatch = true;
      } else {
        isMatch = false;
      }
    }
    if (isMatch) {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = where