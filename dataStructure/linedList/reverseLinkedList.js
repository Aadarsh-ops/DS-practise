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
var reverseList = function(head) {
    let node,curr;
    if(head){
        node = new ListNode(head.val);
        head = head.next;
    }else {
        return null;
    }
    while(head){
         curr = node;
        node = new ListNode(head.val);
        head = head.next;
        node.next = curr;
    }
    return node;
};