function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

//Approach -1  => Convert Linked list to array and then check palindrome in an array
// function isPalindromeArrayCheck(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// var isPalindrome = function(head) {
//     let currentNode = head
//     let array = []
//     while(currentNode !== null) {
//        array.push(currentNode.val)
//        currentNode = currentNode.next
//     }
//     //is array palindrome
//     const res = isPalindromeArrayCheck(array)
//     return res
// };

 const LL = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))



//Approach -2 -> Step-1: Find the Middle Element Step-2: Reverse the 2nd half of list Step-3: Compare both the LL


var isPalindrome = function(head) {
  // Step-1: Find the Middle Element -> Slow, Fast Pointer Approach
  let slowPointer = head
  let fastPointer = head
  while(fastPointer && fastPointer.next !== null) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
  }  
  
  // Step-2 Reverse the  second half  of LL 
  let prev = null
  let curr = slowPointer

  while(curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  //Step-3 Compare both LL
  let firstLL = head
  let secondLL = prev
  while(secondLL) {
    if(firstLL.val !== secondLL.val) {
        return false
    }
    firstLL = firstLL.next
    secondLL = secondLL.next
  }
  return true

};


// console.log(isPalindrome(LL))