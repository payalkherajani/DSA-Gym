var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0
    let currentCount = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            if(currentCount > maxCount) {
              maxCount = currentCount
             }
            currentCount = 0
        }
        else {
            currentCount = currentCount + 1
        }
    }
    if(currentCount > maxCount) {
        maxCount = currentCount
    }
    return maxCount
};