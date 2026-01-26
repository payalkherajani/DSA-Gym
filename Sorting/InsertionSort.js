
const array = [9,5,3,20,1,-10,0]

function InsertionSort(arr) {
 const n = arr.length
 for(let i =1; i < n; i++){
    let previousElementIndex = i-1
    let currentElement = arr[i]

    while(arr[previousElementIndex] > currentElement && previousElementIndex >= 0) {
        //shift previous element to previousEleIndex + 1
        arr[previousElementIndex + 1] = arr[previousElementIndex]
        previousElementIndex --
    }

    arr[previousElementIndex + 1] = currentElement 
 }
 return arr
}

console.log(InsertionSort(array))