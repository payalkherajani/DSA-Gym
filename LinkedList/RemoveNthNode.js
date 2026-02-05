
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Approach-1 Two Pass Approach
// var removeNthFromEnd = function(head, n) {
//     let length = 0
//     let sentinelNode = new ListNode()
//     sentinelNode.next = head

//     while(head) {
//         head = head.next
//         length++
//     }

//     let prevPosition = length - n //position just before the n, so that we have previous position when we will delete n position

//     let prevNode = sentinelNode


//     for (let i = 0; i< prevPosition; i++) {
//        prevNode = prevNode.next
//     }

//     prevNode.next = prevNode.next.next

//     return sentinelNode.next

// };


//Approach -2 One Pass Approach

var removeNthFromEnd = function(head, n) {
    let sentinelNode = new ListNode()
    sentinelNode.next = head
    let slowPointer = sentinelNode
    let fastPointer = sentinelNode
    for(let i=0; i<n; i++) {
        fastPointer = fastPointer.next
    }

    while(fastPointer && fastPointer.next) {
      fastPointer = fastPointer.next
      slowPointer = slowPointer.next
    }

    slowPointer.next = slowPointer.next.next
    return sentinelNode.next

}