
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        result.push(matrix[i])
      } else {
        let str = [];
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          str.push(matrix[i][j])
        
        }
        result.push(str)
      }
    }
    return ([].concat(...result));
  } else {

    return result;   
  }
}
