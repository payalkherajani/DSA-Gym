//Refer this Problem Statement: https://leetcode.com/problems/move-zeroes/description/

//Solution-1

var moveZeroes = function(nums) {
   let x = 0
   for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[x] = nums[i]
      x++
    }
   }
   nums.fill(0, x)
};