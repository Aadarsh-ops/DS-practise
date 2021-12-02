/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) return null;
    let curr = head;
    let head1 = new ListNode(0);
    let list = head1
    let head2 = new ListNode(0);
    let list1 = head2;
    while(curr){
            if(curr.val < x){
                let node = new ListNode(curr.val);
                head1.next = node;
                head1 = head1.next;
            }else{
                  let node = new ListNode(curr.val);
                head2.next = node;
                head2 = head2.next;
            }
        curr = curr.next;
    }
    if(list1)
    head1.next = list1.next;
    return list.next;
    
};