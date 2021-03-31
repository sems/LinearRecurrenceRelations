var now = require("performance-now")

let letters = ['A', 'B', 'C', 'D']

function check(n) {
  if (n < 1) return;
  console.log("When N is", n);
  let t0 = now() 
  let check = 1
  let array = letters
  while (check < n) {
    check ++
    array = getNewSet(array)
  }

  let t1 = now() 

  let calucationMessage = ((t1-t0)/1000).toFixed(2) == "0.00" ? "less then a second." : ((t1-t0)/1000).toFixed(2) + " seconds."
  console.log("There are", array.length,"correct outcomes. Calculated in", calucationMessage, "\n");
}

function getNewSet(arrays) {
  let newArr = []
  arrays.forEach(rightArray => {
    letters.forEach(letter => {
      combination = Array.isArray(rightArray) ? rightArray.concat(letter) : [rightArray, letter]
      // // For debugging
      // console.log("->", combination);
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
check(10)