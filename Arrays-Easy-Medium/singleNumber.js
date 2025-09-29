
//Solution 1
var singleNumber = function(nums) {
    let obj = {}
    for (let i = 0; i< nums.length; i++) {
        const value = nums[i]
        if(obj[nums[i]]) {
           obj[nums[i]]++
        }else{
             obj[nums[i]] = 1
        }
    }

 const key = Object.keys(obj).find(k => obj[k] === 1);
 return Number(key)
};


//Solution - 2

//XOR Removes duplicates and hence you are left with the value
let xor = 0
for(let i=0; i< nums.length; i++) {
    xor = xor ^ nums[i]
}
return xor