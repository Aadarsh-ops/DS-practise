/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
 let reverse,node,count=0;
    let curr = head;
    count +=1;
    if(head){
        reverse = new ListNode(head.val);
        head = head.next
        count +=1;
    }else{
        return null;
    }
    while(head){
        node = reverse;
        reverse = new  ListNode(head.val);
        reverse.next = node;
        head = head.next;
        count +=1;
    }
    count = count / 2;
    
    while(curr && reverse && count){
        if(curr.val !== reverse.val ){
            return false;
        }
        curr = curr.next;
        reverse = reverse.next; 
        count--;
    }
    return true;
};