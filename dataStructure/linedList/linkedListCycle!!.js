/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
 let curr = head;
    let curr1 = head;
    while (curr != null && curr.next != null){
        curr = curr.next.next;
        curr1 = curr1.next;
        if (curr === curr1){
            curr1 = head;
            while(curr1 !== curr){
                curr1 = curr1.next;
                curr = curr.next;
            }
            return curr1;
        }
    }
    return null; 
};