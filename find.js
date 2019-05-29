module.exports = find

function find (arr, searchDetails) {
    console.log (arr)
    console.log (searchDetails)
    var key = Object.keys(searchDetails) 
    for (var i = 0; i < arr.length; i++){
        if(arr[i][key] === searchDetails[key]) {
            console.log(arr[i]);
            return arr[i]
        }
    }
}
