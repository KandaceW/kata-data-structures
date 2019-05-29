module.exports = find;

function find(arr, searchDetails) {
  let key = Object.keys(searchDetails);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === searchDetails[key]) {
      return arr[i];
    }
  }
}
