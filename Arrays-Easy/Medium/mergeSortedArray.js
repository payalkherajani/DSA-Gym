// Refer Problem Statement: https://leetcode.com/problems/merge-sorted-array/

//Solution-1: MERGE THE ELEMENTS IN Nums1 and then sort is bad approach as its time complet=xilty would be O(N+M LOG(N+M))

//Solution -2: In Comparision to time complexity

var merge = function(nums1, m, nums2, n) {
    const nums1Copy = nums1.slice(0,m)
    let p1 = 0
    let p2 = 0
    for(let i = 0; i < m+n; i++){
        if( p2 >= n ||  (p1 < m &&  nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1]
            p1++
        }
        else {
            nums1[i] = nums2[p2]
            p2++
        }
    }
};


//Solution - 3 - More optimized in comparision to space complexity
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
   for (let i = m + n - 1; i >= 0; i--){
     if(p2 < 0) {
        break
     }

     if(p1 >=0 && nums1[p1] > nums2[p2]) {
       nums1[i] = nums1[p1]
       p1--
     }
     else {
        nums1[i] = nums2[p2]
        p2--
     }
   }
};