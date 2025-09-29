var missingNumber = function(nums) {
   const n = nums.length
   const total = (n * (n+1))/2
   let sum = 0
   nums.forEach((a) => sum = a + sum) 
   return total - sum
};