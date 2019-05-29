module.exports = where;

function where(arr, searchDetails) {
  // console.log(searchDetails);
  let newArray = [];
  let keys = Object.keys(searchDetails);
  for (let i = 0; i < arr.length; i++) {
    var matchedAll = true;
    for (let j = 0; j < keys.length; j++) {
      var key = keys[j];
      console.log(key);
      matchedAll = matchedAll && arr[i][key] === searchDetails[key];
    }
    if (matchedAll) newArray.push(arr[i]);
  }
  return newArray;
}
