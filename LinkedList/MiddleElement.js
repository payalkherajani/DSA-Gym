/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fastPointer = head
    let slowPointer = head

    while(fastPointer != null && fastPointer.next !== null){
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }
    return slowPointer
};