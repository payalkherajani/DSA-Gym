var reverseList = function(head) {
    let prev = null
    let current = head
    while(current !== null) {
        temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev
};