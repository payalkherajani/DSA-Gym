function starPattern5(n) {
  for (let i = 0; i < n; i++){
    let row = ""
    for (let j = 1; j <= n; j++) {
      if (j >= n - i) {
        row = row + "*"
      }
      else {
        row = row + " "
      }
    }
    console.log(row)
  }
}

starPattern5(5)