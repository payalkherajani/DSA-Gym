
//   Definition for singly-linked list.
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // to remove any node in LL we need to have track of previous node, so that connection is easily removed.
    //sentinel node is a node which keeps a watch on. basically a starting point because in case the element we want to remove is at start i.e head element only we want to remove so it cannot be done without maintaining the previous node

    const sentinelNode = new ListNode()
    sentinelNode.next = head
    let previourNode = sentinelNode

    while(previourNode && previourNode.next) {
     if(previourNode.next.val === val) {
        previourNode.next = previourNode.next.next
     }
     else {
        previourNode = previourNode.next
     }
    }

    return sentinelNode.next

};