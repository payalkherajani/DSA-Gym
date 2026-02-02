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