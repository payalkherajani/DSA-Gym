const arr = [2,4,76,9,0,-20, 1, 0, 98,70]

function mergeTwoSortedArray(leftArr, rightArr) {
    //consider p1 to be a pointer of leftArr
    //consider p2 to be a pointer of rightArr

    let p1 = 0
    let p2 = 0
    let result = []

    while(p1 < leftArr.length && p2 < rightArr.length) {
      if(leftArr[p1] < rightArr[p2]) {
        result.push(leftArr[p1])
        p1++
      }
      else {
         result.push(rightArr[p2])
         p2++
      }
    }
    result = [...result, ...leftArr.slice(p1), ...rightArr.slice(p2)]
    return result

}
//divide and conquer algorithm

function SortArray(arr) {
  //find the middle element
  if(arr.length <= 1) return arr
  let middleEle = Math.floor(arr.length/2)
  let leftArray = SortArray(arr.slice(0,middleEle))
  let rightArray = SortArray(arr.slice(middleEle))
  return mergeTwoSortedArray(leftArray, rightArray)
}

console.log(SortArray(arr))