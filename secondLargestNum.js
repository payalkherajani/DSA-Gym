//NAMASTE DSA SOLUTION, more cleaner
function secondLargestNum1() {
  let largestNum, secondLargestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum
      largestNum = arr[i];

    }
    else if (arr[i] !== largestNum &&  arr[i] > secondLargestNum) {
      secondLargestNum = arr[i]
    }
  }

  return { largestNum, secondLargestNum }

}

//EDGE CASES: 
//1. ARRAY IS EMPPTY
//2. ARRAY HAS LESS THAN 2 ELEMENTS
//3. DUPLICATES?



//NAMASTE DSA SOLUTION, more cleaner
function secondLargestNum1() {
  let largestNum, secondLargestNum = -Infinity;

  if (arr.length < 2) {
    return null
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum
      largestNum = arr[i];

    }
    else if (arr[i] > secondLargestNum) {
      secondLargestNum = arr[i]
    }
  }

  return secondLargestNum

}


//MY SOLUTION - I wrote myself before watching Namaste DSA solution
function secondLargestNum(arr) {
  let largestNum, secondLargestNum
  if (arr[0] > arr[1]) {
    largestNum = arr[0]
    secondLargestNum = arr[1]
  }
  else {
    largestNum = arr[1]
    secondLargestNum = arr[0]
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      if (largestNum > secondLargestNum) {
        secondLargestNum = largestNum
      }
      largestNum = arr[i];

    }
    if (arr[i] !== largestNum && arr[i] > secondLargestNum) {
      secondLargestNum = arr[i]
    }
  }

  return { largestNum, secondLargestNum }
}

const r = largestNumberInArray([1000, 800, 400, 608, 1600, 6, 790])
console.log(r)


