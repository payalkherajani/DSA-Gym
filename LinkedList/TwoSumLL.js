
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 


function getCarryAndDigit(val1, val2, carry) {
  let sum = val1 + val2 + carry
  if(sum >= 10) {
    let remainder = sum % 10
    let quotient = Math.floor(sum / 10)
    return { carry: quotient, digit: remainder }
  }
  else {
    return { carry: 0, digit: sum }
  }
}

/* @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    const { carry: initialCarry, digit: initialDigit } = getCarryAndDigit(l1.val, l2.val, 0)
    let answerLinkedList = new ListNode(initialDigit) //consider this as sentinel list node
    
    let carry = initialCarry
    let current = answerLinkedList

    while(l1.next || l2.next || carry > 0) {

        let val1 = l1.next ? l1.next.val : 0   
        let val2 = l2.next ? l2.next.val : 0

        const { carry: sumCarry, digit } = getCarryAndDigit(val1, val2, carry)
        current.next = new ListNode(digit)
        current = current.next 
        carry = sumCarry
       l1 = l1.next ? l1.next : l1         
        l2 = l2.next ? l2.next : l2
    }
    return answerLinkedList
};

// l1 = 2 -> 4 -> 3
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

// l2 = 5 -> 6 -> 4
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)


// Call the function
let result = addTwoNumbers(l1, l2)

// Optional: print result
let curr = result
while (curr) {
  console.log(curr.val)
  curr = curr.next
}