function where(arr, searchDetails) {
  var values = Object.values(searchDetails)
  var keys = Object.keys(searchDetails)
  var result = []


  for (var i = 0; i < arr.length; i++) {
    if (values.length < 2) {
      if (arr[i][keys[0]] == values[0]) {
        result.push(arr[i])

      }
    } else if (arr[i][keys[0]] == values[0] && arr[i][keys[1]] == values[1]) {
      result.push(arr[i]) 
    }
  }
  return result
}

module.exports = where