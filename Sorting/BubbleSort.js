//Complexity of this solution is O(N^2) which is not good at all
function BubbleSort(arr) {
    const n = arr.length
    for (let i = 0; i < n-1; i++){
      for (let j = 0; j < n-1-i; j++) {
        if(arr[j] > arr[j+1]) {
            //swap
             let temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
            
        }
       
      }
    }
    return arr
}

console.log(BubbleSort([5,2,4,1])) 

//Improvment - If no swapping is happening in sorting algorithm i.e j loop so we can break the loop

 //Complexity of this solution is O(N^2) which is not good at all
function BubbleSortImproved(arr) {
    const n = arr.length
    for (let i = 0; i < n-1; i++){
         let isSwapped = false
      for (let j = 0; j < n-1-i; j++) {
        if(arr[j] > arr[j+1]) {
            //swap
             let temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp   
              isSwapped = true
        }       
      }
        if(!isSwapped) break
    }
    return arr
}

console.log(BubbleSortImproved([1,2,3,4])) 