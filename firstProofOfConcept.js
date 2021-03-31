let letters = ['A', 'B', 'C', 'D']

function single() {
  let counter = 0

  letters.forEach(letter => {
    counter++
  });
  console.log(counter)
}

function double() {
  let good = 0
  letters.forEach(l1 => {
    letters.forEach(l2 => {
      let combination = [l1, l2]
      if (checkIfAIsAfterB(combination)) {
        good++
      } 
    });
  });
  console.log(good);
}

function triple() {
  let good = 0
  letters.forEach(l1 => {
    letters.forEach(l2 => {
      letters.forEach(l3 => {
        let combination = [l1, l2, l3]
        if (checkIfAIsAfterB(combination)) {
          good++
        } 
      });
    });
  });
  console.log(good);
}

function quad() {
  let good = 0
  let wrong = []
  let right = []
  letters.forEach(l1 => {
    letters.forEach(l2 => {
      letters.forEach(l3 => {
        letters.forEach(l4 => {
          let combination = [l1, l2, l3, l4]
          if (checkIfAIsAfterB(combination)) {
            good++
            right.push(combination)
          } else {
            wrong.push(combination)
          }
        });
      });
    });
  });
  console.log(Math.pow(4,4));
  console.log("Good:", good, "\n");
  console.log(wrong.length, "wrong onces, see: \n", wrong);
}

function five() {
  let good = 0
  letters.forEach(l1 => {
    letters.forEach(l2 => {
      letters.forEach(l3 => {
        letters.forEach(l4 => {
          letters.forEach(l5 => {
            let combination = [l1, l2, l3, l4, l5]
            if (checkIfAIsAfterB(combination)) {
              good++
            } 
          });
        });
      });
    });
  });
  console.log(good);
}

console.log('single')
single()

console.log('\ndouble')
double()

console.log('\ntriple')
triple()

console.log('\nquad')
quad()

console.log('\nfive')
five()

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