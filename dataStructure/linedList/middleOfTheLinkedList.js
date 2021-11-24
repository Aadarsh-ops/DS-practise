/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curr1 = head;
    let curr2 = head;
    while (curr2 && curr2.next && curr2.next.next){
        curr1 = curr1.next;
        curr2 = curr2.next.next;
    }
    if(curr2.next){
      return  curr1.next;
    }else{
        return curr1
    }   