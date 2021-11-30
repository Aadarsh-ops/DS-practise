/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size= 1;
    let curr = head;
    while(curr){
        curr= curr.next;
        size++;
    }
     let i=size-n;
    size = 1;
    curr = head;
    while(curr){
        if(size ==i-1){
            if(curr.next.next){
                curr.next = curr.next.next
            }else{
                curr.next=null
            }
        }
        curr = curr.next;
        size++;
    }
    if(i==1) return head.next;
    return head;
};