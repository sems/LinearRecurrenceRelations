let letters = ['A', 'B', 'C', 'D']

function check(n) {
  console.log("When N is", n);

  let check = 1
  let array = letters
  while (check < n) {
    check ++
    array = getNewSet(array)
  }
  
  console.log("There are", array.length,"correct outcomes.");
}

function getNewSet(arrays) {
  let newArr = []
  arrays.forEach(rightArray => {
    letters.forEach(letter => {
      combination = Array.isArray(rightArray) ? rightArray.concat(letter) : [rightArray, letter]
      // // For debugging
      // console.log("->", typeof combination, combination);
      if (checkIfAIsAfterB(combination)) {
        newArr.push(combination)
      } 
    });
  });
  return newArr
}

function checkIfAIsAfterB(array) {
  if(Array.isArray(array) && array.includes('B')) {
    let indexOfB = array.indexOf('B')
    let newArr = array.slice(indexOfB)
    return newArr.includes('A') ? false : true
  }
  return true
}

check(1)
check(2)
check(3)
check(4)