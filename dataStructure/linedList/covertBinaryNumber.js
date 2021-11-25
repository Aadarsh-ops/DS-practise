/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(head == null) return null;
    let curr = head;
    let previous = null;
    
    while(curr){
        let next = curr.next;
        curr.next = previous;
        previous = curr;
        curr = next;
    }
    
    let count  = 1
    let total = 0
    
    while(previous){
          if(previous.val ==  1) total = total + count;
        count = count * 2;
        previous = previous.next;
    }
    return total;
};