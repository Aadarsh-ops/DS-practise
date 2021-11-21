/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head;
    let forward = head;
    if(curr  == null || curr.next  == null || curr.next.next == null) return false;
    
    while(curr.next != null && forward.next!=null && forward.next.next != null){
         curr = curr.next;
         forward = forward.next.next;
        if(curr == forward) return true;
    }
    return false;
};