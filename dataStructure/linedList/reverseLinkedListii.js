/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) { 
    let i=1;
    let curr = head
    let temp;
    while(i!=left){
        temp = curr;
    curr = curr.next;
        i++;
    }
    if(curr == null) return null;
    let curr1 = curr;
    let curr2 = curr;
    let previous = null;
    while(i <= right){
        let next = curr1.next;
        curr1.next = previous;
        previous =  curr1;
        curr1 = next;
        i++;
    }
if(temp){
  temp.next = previous;  
}  else if(previous){
    head = previous;
} 
if(curr2) curr2.next = curr1;
    return head;
};
