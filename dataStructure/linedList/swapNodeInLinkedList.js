/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let size = 1;
    let curr = head;
    let temp,temp1;
    while(curr){
        curr = curr.next;
        size++;
    }
     curr = head;
     let i = 1,j= size-k;
    while(curr){
        if(i == k) temp = curr.val
        if(i == j) {
           temp1 = curr.val;
        }
           curr = curr.next;   
            i++;
    }
    curr = head;
    i=1;
    while(curr){
        if(i == k){
            curr.val = temp1;
        }   if(i == j) {
            curr.val = temp;
        }
        curr= curr.next;
        i++;
    }
    return head;
};