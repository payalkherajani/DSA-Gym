function countDigit(num) {
  if(num === 0){
    return 1
  }
  
  let n = Math.abs(num) //change negative numbers to positive
  let count = 0


  while (n > 0) {
    n = Math.floor(n / 10)
    count++
  }
  return count
}

console.log(countDigit(234))