let letters = ['A', 'B', 'C', 'D']

function single() {
  let counter = 0

  letters.forEach(letter => {
    counter++
  });
  console.log(counter)
}

let stillPossible = []

function check(n) {
  let check = 1
  let array = letters
  console.log(array);
  while (check < n) {
    array = getNewSet(array)
    check ++
  }

  console.log("N:", n);
  console.log(array.length);
}

function getNewSet(arrays) {
  let newArr = []
  arrays.forEach(rightArray => {
    letters.forEach(letter => {
      let combination = [rightArray, letter]
      if (checkIfAIsAfterB(combination)) {
        newArr.push(combination)
      } 
    });
  });
  return newArr
}

function checkIfAIsAfterB(array) {
  if(array.includes('B')) {
    let indexOfB = array.indexOf('B')
    let newArr = array.slice(indexOfB)
    if (newArr.includes('A')) {
      return false
    } 
    return true
  }
  return true
}

check(5)