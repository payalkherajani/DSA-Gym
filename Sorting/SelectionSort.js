const array = [5,6,3,2,10,1]

function SelectionSort(arr) {
    const n = arr.length
    for(let i = 0; i< n-1; i++) {
      let min = i
      //find the minimum index from the remaining array
      for(let j = i+1; j < n; j++) {
        if(arr[j] < arr[min]) {
            min = j
        }
      }

      //if index and min index are not same then swap the values

      if(i !== min) {
        //swap the values
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }

    }
    return arr
}

console.log(SelectionSort(array))