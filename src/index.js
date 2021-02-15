
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (!matrix) {
    return arr
  }
  for (i = 0; i < matrix.length; i++) {
      let newArr = matrix[i]
      if (i === 0) {
          for (let j = 0; j < newArr.length; j++) {
              arr.push(newArr[j])
      }
  } else if (i % 2) {
      let xy = newArr.reverse()
      for (let x = 0; x < newArr.length; x++) {
          arr.push(xy[x])
      } 
  } else if (!(i % 2)) {
      for (let j = 0; j < newArr.length; j++) {
          arr.push(newArr[j])
      }
  }
}

  return arr

}
