function theBeatlesPlay(arr1, arr2) {
  var emptyArr = [];
  for (let i = 0; i < arr1.length; i++) {
    emptyArr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return emptyArr;
}

function 