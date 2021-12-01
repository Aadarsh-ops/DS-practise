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
var oddEvenList = function(head) {
    if(!head) return head;
    let curr = head;
    let head1 = new ListNode();
    let curr1 = head1;
    let node;
    while(curr && curr.next && curr.next.next){
         node = new ListNode(curr.next.val);
        curr1.next = node;
        curr.next = curr.next.next;
           curr1 = curr1.next;
        curr = curr.next;
    }
    if(curr && curr.next){
        node = new ListNode(curr.next.val);
        curr1.next = node;
    }
    curr.next = head1.next;
    return head;
};