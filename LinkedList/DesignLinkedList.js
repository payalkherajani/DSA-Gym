//consider initial linked list to 
// 1 -> 2 -> 3 -> 4

function Node(val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function() {
    this.head = null
    this.size = 0
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val)
  newNode.next = this.head
  this.head = newNode
  this.size ++ 
}

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val)

   //Corner case - Empty LL
   if(this.head === null) {
    this.head = newNode
   }
   else {
  //STEP-1: reach at the end of the tail therefore traverse the LL
  let currentNode = this.head

  while (currentNode.next !== null) {
    currentNode = currentNode.next
  }
  //STEP-2

  currentNode.next = newNode
  //no need to write newNode.next = null because it is already written in function definition of creating new node
  }
  this.size ++ 
}

MyLinkedList.prototype.addAtIndex = function (index,val) {
  let newNode = new Node(val)
  let currentNode = this.head
  if(index <0 || index > this.size) return
  //Corner Case - if index=0
  if(index === 0) {
    return this.addAtHead(val)
  }
  //Corner Case - if index= last
  else if(index === this.size) {
    return this.addAtTail(val)
  }
  else {
    //Reach at index-1, because we have to add new node before the index, hence we need to traverse the LL
    for(let i=0; i < index-1; i++) {
        currentNode = currentNode.next
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
  }
   this.size ++ 
}

MyLinkedList.prototype.get = function (index) {
    let currentNode = this.head

    if(index <0 || index >= this.size){
        return -1
    }
    for(let i=0; i < index; i++) {
        currentNode = currentNode.next
    }
   return currentNode.val

}

MyLinkedList.prototype.deleteAtIndex = function (index) {
   //Corner Case-1 Index does not exists 
   if(index <0 || index >= this.size){
        return
    }

   //Corner Case - 2 delete the first index
   if(index === 0){
        this.head = this.head.next
    }

   //For deletion, reach the index-1 and then link to next node (which is two step ahead)
   //Reduce size
   else {
   let currentNode = this.head
   for(let i =0; i < index-1; i++) {
    currentNode = currentNode.next
   }
   currentNode.next = currentNode.next.next
   }

   this.size--

}