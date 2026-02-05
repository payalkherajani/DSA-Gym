function ListNode(val) {
      this.val = val;
      this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


var getIntersectionNode = function(headA, headB) {
    let firstLLCurrEle = headA
    let secondLLCurrEle = headB
    let set = new Set()
    while(secondLLCurrEle !== null) {
      set.add(secondLLCurrEle)
      secondLLCurrEle = secondLLCurrEle.next
    }

    while(firstLLCurrEle !== null) {
        if(set.has(firstLLCurrEle)) {
            return firstLLCurrEle
        }
        firstLLCurrEle = firstLLCurrEle.next
    }
    return null
};


//Common Nodes
const common = new ListNode(8);
common.next = new ListNode(4);
common.next.next = new ListNode(5);

//List A

const headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = common;

//List B

const headB = new ListNode(5);
headB.next = new ListNode(6);
headB.next.next = new ListNode(1);
headB.next.next.next = common;

getIntersectionNode(headA, headB)