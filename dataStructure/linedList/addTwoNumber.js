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
    let l = new ListNode(0);
    let list = l;
    while ( l1  && l2){
    total = l1.val + l2.val + carry;
        if(total > 9){
            while(total>9){
                total = total % 10;
                carry = 1;
            }
        }else{
            carry = 0;
        }
        let node = new ListNode(total);
        l.next = node;
        l = l.next;
              l1 = l1.next;
              l2 = l2.next;
    }
    let l3 = l1 || l2;
    while(l3){
            total = l3.val + carry;
        if(total > 9){
            while(total>9){
                total = total % 10;
                carry = 1;
            }
        }else{
            carry = 0;
        }
         let node = new ListNode(total);
        l.next = node;
        l = l.next;
        l3 = l3.next;
      
    }
    if(carry){
        let node = new ListNode(carry)
        l.next = node;
        l = l.next;
    }
    return list.next;
};