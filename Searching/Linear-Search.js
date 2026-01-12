function LinearSearch(arr, target) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(LinearSearch([1,4,10,5,0], 0))