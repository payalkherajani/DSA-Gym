/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    while (rightPointer >= leftPointer) {
        let middlePointer = Math.floor((leftPointer + rightPointer)/2)
        if(target === nums[middlePointer]) {
            return middlePointer
        }
        else if(target > nums[middlePointer]) {
            leftPointer = middlePointer + 1
        }
        else {
            rightPointer = middlePointer - 1
        }
    } 
    return -1
};