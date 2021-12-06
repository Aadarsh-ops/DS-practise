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
var deleteMiddle = function(head) {
    if(!head) return head;
    if(!head.next) return null;
    let curr = head;
    let curr1 = head;
    while(curr1.next && curr1.next.next && curr1.next.next.next){
        curr1 = curr1.next.next;
        curr = curr.next;
    }
    if(curr.next) curr.next = curr.next.next;
    return head;
    
};