function find (arr, searchDetails) {

var searchKey = Object.keys(searchDetails)[0]
var searchValue = Object.values(searchDetails)[0]
console.log('Search key',searchKey)
console.log('Search value',searchValue)

// if(searchDetails = Object.values(arr[2])) {console.log(true)}

// console.log(arr[2])

    for (i=0; i<arr.length; i++){
      var item = arr[i]
      console.log('Testing ', item)
      console.log(item[searchKey])
      if(item[searchKey] == searchValue) {
        console.log('MATCH!')
        return item
      }

      // does this item in the array have the same value as seartchDetails
    // if (test is true) {
      // if(searchDetails = Object.values(arr[2]))
    // return arr[i]
    // }
  }
  
}
module.exports = find