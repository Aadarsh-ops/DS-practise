/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let count,total =0,carry = 0
    let l = l1;
    while (l1 && l1.val && l2 && l2.val){
    total = l1.val + l2.val + carry;
        if(total > 9){
            while(total>9){
                total = total % 10;
                carry = 1;
            }
        }else{
            carry = 0;
        }
        l1.val = total;
           if(l1.next) l1 = l1.next;
           if(l2.next) l2 = l2.next;
    }
    if(l2) l1 = l2;
    while(l1 && l1.val){
            total = l1.val + carry;
        if(total > 9){
            while(total>9){
                total = total % 10;
                carry = 1;
            }
        }else{
            carry = 0;
        }
        l1.val = total;
        if(l1.next)
        l1 = l1.next;
    }
    if(carry){
        let node = new ListNode(1);
        l1.next = node;
    }
    return l;
};