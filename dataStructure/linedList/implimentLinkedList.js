function Node(val,next){
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
}
var MyLinkedList = function(val) {
   
    this.head = null;
    this.tail =  null;
    this.size = 0;
};
/** 
 * @param {number} index
 * @return {number}
 */

// to do complete get function

MyLinkedList.prototype.get = function(index) {
//     if linked list is empty
    if(index > this.size || index < 0) return null;
    else if(index==0){
        return this.head.val;
    } else if(index == this.size - 1){
        return this.tail.value;
              }
             else{
        let current = this.head;
                 if(index > 1) 
                     index -=1
    while(index--){
        current = current.next;
    }
    return current.val;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
//  if the linked list is empety
    let node = new Node(val);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
     node.next = this.head;
    this.head = node;
    }
   this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
//     if list is empty
    let node = new Node(val);
  if(!this.head){
     this.tail = node;
      this.head = node;
  }else{
    this.tail.next = node;
    this.tail = Node;
  }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new Node(val);
   if(index > this.size)
       return null;
//     if index at 0;
   else if( index == 0){
        node.next = this.head.next;
        this.head = node;
        this.size++;
     }else{
           let cureent = this.head; 
         if(index > 1)
   index = index - 1;
    while(index--){
       cureent = cureent.next;
   }
    node.next = cureent.next;
      cureent.next=node;
       }
    this.size++;
 };

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > this.size){
         return null;
    } 
//     remove at head
   else if(index== 0){
        this.head =this.head.next;
        this.size--;
    } 
//     remove at tail
   else if(index==this.size-1){
        let cureent = this.head;
        if(index >1)
        index -= 1;
    while(index--){
            cureent = cureent.next;
        }
        cureent.next =null;
        this.tail = cureent;
        this.size--;
    }else{
          // remove at index
    let cureent = this.head;
        if(index > 1)
        index= index - 1;
    while(index--){
        cureent = cureent.next;
    }
    cureent = cureent.next.next;
        this.size--;
    }
};