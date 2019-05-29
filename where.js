module.exports = where

function where (arr, searchDetails) {
    console.log(arr);
    console.log(searchDetails);
    var key = Object.keys(searchDetails)
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i][key] === searchDetails[key]) {
            console.log(arr[i]);
            newArr.push(arr[i])
        }
    }
    return newArr
}
