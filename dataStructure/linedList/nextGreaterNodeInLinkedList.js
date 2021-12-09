/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    if(!head) return []
    let arr = []
    while(head){
        let curr = head.next
        while(curr){
            if(curr.val > head.val){
                break;
            }
            curr = curr.next
        }
        if(curr){
            arr.push(curr.val)
        }else{
            arr.push(0)
        }
        head = head.next
    }
    return arr;
};