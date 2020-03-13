// Your code here

function mapToNegativize(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * -1)
  }
    return newArr
}

function mapToNoChange(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i])
  }
  return newArr
}

function mapToDouble(sourceArray) {
    let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2)
  }
  return newArr
}

function mapToSquare(sourceArray) {
    let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i]**2)
  }
  return newArr
}

function reduceToTotal(sourceArray, startingPoint){
  let total = 0
  for(let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i] 
  }
  return total
}