var now = require("performance-now")

let letters = ['A', 'B', 'C', 'D']

/**
 * 
 * @param {interger} n 
 * @returns amount of possibilities with performance message
 */
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
  let performanceMessage = ((t1-t0)/1000).toFixed(2) == "0.00" ? "less then a second." : ((t1-t0)/1000).toFixed(2) + " seconds."
  console.log("There are", array.length,"correct outcomes. Calculated in", performanceMessage, "\n");
}

/**
 * Will make a new set from a given previous set (array), by increasing the a[n] by one, 
 * where the new set only consits of possible outcomes.
 * @param {array} arrays 
 * @returns {array} which contains only sets which are possible in this RR
 */
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

/**
 * Checks if a 'A' is present after an 'B'.
 * @param {array} array 
 * @returns {boolean} 
 */
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
check(13)