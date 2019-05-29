// module.export = where

function where (arr, searchDetails) {

  // var searchKey = Object.keys(searchDetails)[0]
  // var searchValue = Object.values(searchDetails)[0]

  var searchKeys = Object.keys(searchDetails)//[0]
  var requiredMatches = searchKeys.length
  console.log(requiredMatches)
  // var searchValues = Object.values(searchDetails)//[0]
  // console.log('Search keys',searchKeys)
  // console.log('Search values',searchValues)

  var results=[];
    
    for (i=0; i<arr.length; i++){
      var matches = 0;
      var item = arr[i]
      for (j=0; j<requiredMatches; j++) {
        var searchKey = Object.keys(searchDetails)[j]
        var searchValue = Object.values(searchDetails)[j]
          // console.log('Testing ', item)
          // console.log(item[searchKey])
        if(item[searchKey] == searchValue) {
          matches++
          if (matches === requiredMatches) {
            console.log('MATCH!')
            results.push(item)
        }
      }
    } 
}
  console.log('RESULTS: ',results, 'ACTUAL LENGTH', results.length)
  return results
}

//jest not working well on home computer so testing done below...

// function getContacts () {
//   return [
//     { id: '123', address: '742 Evergreen Terrace', name: 'Marge Simpson', age: 47 },
//     { id: '124', address: 'Bag End', name: 'Bilbo Baggins', age: 78 },
//     { id: '125', address: 'Wayne Manor', name: 'Bruce Wayne', age: 43 },
//     { id: '126', address: 'Skull Island', name: 'Dr Evil', age: 51 },
//     { id: '127', address: 'Wayne Manor', name: 'Alfred', age: 78 }
//   ]
// }

//jest not working on home computer so testing done below...

//'where finds objects with two search properties'
  // Arrange
  // var contacts = getContacts()
  // var expected = [{ id: '127', address: 'Wayne Manor', name: 'Alfred', age: 78 }]
  // var actual = where(contacts, { age: 78, address: 'Wayne Manor' })
  // where(contacts, { age: 78, address: 'Wayne Manor' })
// console.log(actual)


//'where returns multile correct results'
  // var contacts = getContacts()
  // var actual = where(contacts, { age: 78 })
  // console.log('EXPECTED LENGTH 2')


// //'where finds an object by id in an array'
// var contacts = getContacts()
// var expected = [{ id: '123', address: '742 Evergreen Terrace', name: 'Marge Simpson', age: 47 }]
// var actual = where(contacts, { id: '123' })
// console.log('where finds an object by id in an array EXPECTED', expected)

// //'where finds an object by property'
//   // Arrange
// contacts = getContacts()
// expected = [{ id: '126', address: 'Skull Island', name: 'Dr Evil', age: 51 }]
// actual = where(contacts, { address: 'Skull Island' })
// console.log('where finds an object by property EXPECTED', expected)
