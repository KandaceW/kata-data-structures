function find(arr, searchDetails) {
  // console.log(arr)
  // console.log(searchDetails)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]["address"] == Object.values(searchDetails)[0]) {
      return arr[i]
    }
  }

}

module.exports = find