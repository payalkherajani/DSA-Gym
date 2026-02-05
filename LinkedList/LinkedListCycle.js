//Approach-1

var hasCycle = function(head) {
   let current = head 
   let hasCycle = false
   let set = new Set()
   while(current) {
     if(current === null  || set.has(current)){
        hasCycle = true
        break
     }
     set.add(current)
     current = current.next

   }
   return hasCycle
};


//Approach-2 (Flyod Approach)
var hasCycle = function(head) {
   if(!head) return false
   let slowPointer = head
   let fastPointer = head.next

   while(slowPointer !== fastPointer) {
    if(fastPointer === null || fastPointer.next === null) {
        return false
    }
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
   }

   return true
};