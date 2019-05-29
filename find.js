module.exports = find


function find(arr, searchDetails) {
  var searchKey = Object.keys(searchDetails)[0]
  var searchValue = Object.values(searchDetails)[0]

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (item[searchKey] == searchValue) {
      return item
    }
  }
}