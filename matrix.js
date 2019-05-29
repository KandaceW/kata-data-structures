module.exports = {
    getMatrix: getMatrix,
    updateMatrix: updateMatrix
}

function getMatrix (n) {
    console.log(n);
    
    var arr = [];
    for (var i = 0; i < n; ++i) {
        arr[i] = []
            for (var j = 0; j < n; ++j) {
                arr[i][j] = 0
            }
        } 
    return arr;
}

function updateMatrix (matrix, coords, value) {
    console.log(matrix);
    console.log(coords);
    console.log(value);
    for(var i= 0; i < matrix.length; i++){
        matrix[coords[0]][coords[1]] = value
        return matrix
    }
    
    
}
