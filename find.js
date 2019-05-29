module.exports = find

function find(arr, searchDetails) {
  let searchKey = Object.keys(searchDetails)[0]


  for (let i = 0; i < arr.length; i++) {

    let item = arr[i]
    let itemValues = Object.values(item)
    let searchParameter = Object.values(searchDetails)[0]

    if (item[searchKey] == searchDetails[searchKey]) {
      return item
    }



  }
}
