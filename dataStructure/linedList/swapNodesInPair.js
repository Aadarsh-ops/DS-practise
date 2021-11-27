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
var swapPairs = function(head) {
    let curr = head;
    while(head && head.next){
        let temp = head.val;
        head.val = head.next.val;
        head.next.val = temp;
        head = head.next.next;
    }
    return curr;
};