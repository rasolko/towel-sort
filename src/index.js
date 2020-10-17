
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length  === 0) return []
  let result = [];
  matrix.map( (item, index) => {
    if(index % 2 === 0){
      result.push(...item)
    } else{
      result.push(...item.reverse());
    }
    
  })
  return result;
}
